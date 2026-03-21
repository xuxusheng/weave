# M4 技术设计文档 — 执行与调试

> **目标**：对接 Kestra 执行引擎，工作流能跑、能看、能调试。
> **前置**：M3 已完成（Draft/Release 持久化、YAML 转换、版本管理）
> **关键依赖**：Kestra 实例运行中、Kestra API 可达（Basic Auth）、Network Policy 放行

---

## 1. M4 范围界定

### 做
| 模块 | 说明 |
|------|------|
| Kestra 代理层 | 后端代理 Kestra API（Basic Auth），不暴露给浏览器 |
| 保存推 Kestra | 草稿保存 → PUT `{flowId}_test`，版本发布 → PUT `{flowId}` |
| 测试运行 | POST 触发执行，创建 WorkflowDraftExecution |
| 执行监控 | 前端轮询（2-3s）+ 后端定时任务（10min）兜底 |
| 画布运行态 | 节点边框发光 + 状态叠加色，设计态与运行态叠加 |
| 执行详情 | 底部抽屉展示 taskRuns、日志 |
| Replay | 从失败节点重跑（latestRevision: true） |
| 执行历史列表 | WorkflowDraftExecution / WorkflowExecution 列表 |
| WorkflowTrigger 表 | 建表，V1 只做基础 CRUD（M5 做触发逻辑） |
| Kestra 健康检查 | 启动时 + 定时检测，不可达时执行按钮置灰 |

### 不做
| 项目 | 原因 |
|------|------|
| Trigger 调度逻辑 | M5 做 |
| Webhook 触发 | M5 做 |
| Secrets/Variables 管理 | M6 做 |
| 生产 Replay 带权限控制 | V2 做 |
| 回调通知（Kestra → 平台） | 后续扩展 |

---

## 2. 数据库 Schema 变更

### 2.1 新增 WorkflowDraftExecution 表（自包含）

草稿测试运行的执行记录。自包含 = 快照当前节点 + 运行结果，不依赖外链。

```prisma
model WorkflowDraftExecution {
  id            String   @id @default(cuid())
  workflowId    String
  kestraExecId  String   // Kestra execution ID
  nodes         Json     // 执行时的节点快照
  edges         Json     // 执行时的边快照
  inputs        Json
  variables     Json
  inputValues   Json     // 用户传入的 input 值
  state         String   // CREATED / RUNNING / SUCCESS / FAILED / KILLED / WARNING / CANCELLED
  taskRuns      Json     // Kestra taskRuns 数组
  triggeredBy   String   // 触发方式："manual" / "replay:{executionId}:{taskRunId}"
  startedAt     DateTime?
  endedAt       DateTime?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  workflow      Workflow @relation(fields: [workflowId], references: [id], onDelete: Cascade)

  @@index([workflowId, createdAt(sort: Desc)])
  @@map("workflow_draft_executions")
}
```

**设计要点**：
- `taskRuns` 存储 Kestra 返回的完整 taskRuns JSON 数组，前端可直接渲染
- `triggeredBy` 区分触发方式：`"manual"`（手动测试）或 `"replay:{execId}:{taskRunId}"`（重跑）
- `state` 是字符串而非枚举 — Kestra 状态种类多，新增状态不需要迁移

### 2.2 新增 WorkflowExecution 表（引用 Release）

正式发布的执行记录。引用 release 版本的快照。

```prisma
model WorkflowExecution {
  id            String   @id @default(cuid())
  workflowId    String
  releaseId     String
  kestraExecId  String
  inputValues   Json
  state         String
  taskRuns      Json
  triggeredBy   String   // "manual" / "schedule:{triggerName}" / "webhook:{triggerName}" / "replay:{execId}:{taskRunId}"
  startedAt     DateTime?
  endedAt       DateTime?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  workflow      Workflow  @relation(fields: [workflowId], references: [id], onDelete: Cascade)
  release       WorkflowRelease @relation(fields: [releaseId], references: [id])

  @@index([workflowId, createdAt(sort: Desc)])
  @@index([releaseId])
  @@map("workflow_executions")
}
```

**与 DraftExecution 的区别**：
- 不含 nodes/edges/inputs/variables — 通过 releaseId 引用 WorkflowRelease 快照
- `triggeredBy` 包含 trigger 名称（M5 后生效）

### 2.3 新增 WorkflowTrigger 表

触发器表。M4 建表 + 基础 CRUD，M5 实现调度逻辑。

```prisma
model WorkflowTrigger {
  id            String   @id @default(cuid())
  workflowId    String
  name          String   // 触发器名称（如 "daily-9am"）
  type          String   // "schedule" / "webhook"
  config        Json     // 触发器配置（cron、timezone 等）
  inputs        Json     // 触发时传入的 input 值
  kestraFlowId  String   // Kestra wrapper flow 的 flowId
  disabled      Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  workflow      Workflow @relation(fields: [workflowId], references: [id], onDelete: Cascade)

  @@index([workflowId])
  @@map("workflow_triggers")
}
```

**config 示例（Schedule）**：
```json
{
  "type": "schedule",
  "cron": "0 9 * * *",
  "timezone": "Asia/Shanghai"
}
```

**config 示例（Webhook）**：
```json
{
  "type": "webhook",
  "secret": "random-secret-string"
}
```

### 2.4 Workflow 表变更

```prisma
model Workflow {
  // ... 现有字段 ...
  executions   WorkflowExecution[]
  triggers     WorkflowTrigger[]
}
```

新增 `executions` 和 `triggers` 关联。

---

## 3. Kestra 代理层

### 3.1 架构

```
浏览器 ──tRPC──→ 后端 ──HTTP──→ Kestra API
                   Basic Auth
```

- Kestra 放内网，不暴露给浏览器
- 后端代理所有 Kestra API 调用
- 认证信息（用户名/密码）存在后端环境变量

### 3.2 环境变量

```env
KESTRA_URL=http://localhost:8080          # Kestra API 地址
KESTRA_USERNAME=admin                     # Basic Auth 用户名
KESTRA_PASSWORD=admin                     # Basic Auth 密码
```

### 3.3 kestra-client.ts

```typescript
// apps/api/src/lib/kestra-client.ts

interface KestraConfig {
  url: string
  username: string
  password: string
}

class KestraClient {
  private config: KestraConfig
  private healthy: boolean = false

  constructor(config: KestraConfig) {
    this.config = config
  }

  /** 基础请求方法 */
  private async request<T>(
    method: string,
    path: string,
    body?: unknown,
  ): Promise<T> {
    const url = `${this.config.url}${path}`
    const auth = Buffer.from(
      `${this.config.username}:${this.config.password}`,
    ).toString("base64")

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!res.ok) {
      throw new KestraError(res.status, await res.text())
    }

    if (res.status === 204) return undefined as T
    return res.json() as Promise<T>
  }

  // ─── Flow ───

  /** 创建或更新 Flow（upsert） */
  async upsertFlow(namespace: string, flowId: string, yaml: string): Promise<void> {
    await this.request("PUT", `/api/v1/flows/${namespace}/${flowId}`, {
      id: flowId,
      namespace,
      tasks: [],        // Kestra 需要完整 body，YAML 在 source 字段
      source: yaml,     // YAML 内容
    })
  }

  /** 获取 Flow 详情 */
  async getFlow(namespace: string, flowId: string): Promise<KestraFlow> {
    return this.request("GET", `/api/v1/flows/${namespace}/${flowId}`)
  }

  // ─── Execution ───

  /** 触发执行 */
  async triggerExecution(
    namespace: string,
    flowId: string,
    inputs?: Record<string, string>,
  ): Promise<KestraExecution> {
    const qs = inputs
      ? "?" + new URLSearchParams(inputs).toString()
      : ""
    return this.request(
      "POST",
      `/api/v1/executions/${namespace}/${flowId}${qs}`,
    )
  }

  /** 获取执行详情 */
  async getExecution(executionId: string): Promise<KestraExecution> {
    return this.request("GET", `/api/v1/executions/${executionId}`)
  }

  /** 获取执行列表 */
  async listExecutions(params: {
    namespace: string
    flowId: string
    state?: string[]
    size?: number
    page?: number
  }): Promise<KestraExecutionPage> {
    const qs = new URLSearchParams({
      namespace: params.namespace,
      flowId: params.flowId,
      size: String(params.size ?? 20),
      page: String(params.page ?? 0),
    })
    if (params.state) {
      for (const s of params.state) qs.append("state", s)
    }
    return this.request("GET", `/api/v1/executions?${qs}`)
  }

  /** 停止执行 */
  async killExecution(executionId: string): Promise<void> {
    await this.request("DELETE", `/api/v1/executions/${executionId}`)
  }

  /** 重试执行 */
  async retryExecution(executionId: string): Promise<KestraExecution> {
    return this.request("POST", `/api/v1/executions/${executionId}/retry`)
  }

  /** Replay（从指定 taskRun 重跑） */
  async replayExecution(
    executionId: string,
    taskRunId: string,
    latestRevision: boolean = true,
  ): Promise<KestraExecution> {
    return this.request(
      "POST",
      `/api/v1/executions/${executionId}/replay/${taskRunId}`,
      { latestRevision },
    )
  }

  // ─── Logs ───

  /** 获取执行日志 */
  async getExecutionLogs(
    executionId: string,
    params?: { taskRunId?: string; minLevel?: string },
  ): Promise<KestraLogPage> {
    const qs = new URLSearchParams()
    if (params?.taskRunId) qs.set("taskRunId", params.taskRunId)
    if (params?.minLevel) qs.set("minLevel", params.minLevel)
    return this.request(
      "GET",
      `/api/v1/logs/${executionId}${qs.size > 0 ? "?" + qs : ""}`,
    )
  }

  // ─── Health ───

  /** 健康检查 */
  async healthCheck(): Promise<boolean> {
    try {
      await this.request("GET", "/api/v1/health")
      return true
    } catch {
      return false
    }
  }

  /** 获取健康状态（带缓存） */
  async isHealthy(): Promise<boolean> {
    return this.healthy
  }

  /** 刷新健康状态 */
  async refreshHealth(): Promise<boolean> {
    this.healthy = await this.healthCheck()
    return this.healthy
  }
}
```

### 3.4 KestraError

```typescript
class KestraError extends Error {
  constructor(
    public statusCode: number,
    public responseBody: string,
  ) {
    super(`Kestra API error ${statusCode}: ${responseBody}`)
    this.name = "KestraError"
  }
}
```

### 3.5 单例导出

```typescript
// apps/api/src/lib/kestra-client.ts

let instance: KestraClient | null = null

export function getKestraClient(): KestraClient {
  if (!instance) {
    const url = process.env.KESTRA_URL
    const username = process.env.KESTRA_USERNAME
    const password = process.env.KESTRA_PASSWORD

    if (!url || !username || !password) {
      throw new Error("Missing KESTRA_URL / KESTRA_USERNAME / KESTRA_PASSWORD")
    }

    instance = new KestraClient({ url, username, password })
  }
  return instance
}
```

---

## 4. 后端 API（tRPC）

### 4.1 路由设计

在 `workflowRouter` 中新增：

```
workflow:
  ├── existing (list/get/create/update/delete)
  ├── existing (draftSave/draftList/draftRollback)
  ├── existing (releasePublish/releaseList/releaseRollback)
  ├── kestraHealth          ← 新增
  ├── pushDraftToKestra     ← 新增（保存草稿同时推 Kestra）
  ├── pushReleaseToKestra   ← 新增（发布版本同时推 Kestra）
  ├── executeTest           ← 新增
  ├── executionGet          ← 新增
  ├── executionList         ← 新增
  ├── executionKill         ← 新增
  ├── executionReplay       ← 新增
  ├── executionLogs         ← 新增
  ├── syncExecutions        ← 新增（定时任务调用）
  ├── triggerCreate         ← 新增
  ├── triggerList           ← 新增
  ├── triggerUpdate         ← 新增
  ├── triggerDelete         ← 新增
```

### 4.2 API 详细设计

#### 4.2.1 kestraHealth

```typescript
kestraHealth: t.procedure.query(async () => {
  const client = getKestraClient()
  const healthy = await client.refreshHealth()
  return { healthy, timestamp: new Date() }
})
```

#### 4.2.2 pushDraftToKestra

内部方法（被 draftSave 调用），不暴露为独立 endpoint。

```typescript
// 在 draftSave 的 mutation 中，在创建 Draft 后：
async function pushDraftToKestra(workflowId: string, yaml: string) {
  const wf = await prisma.workflow.findUnique({
    where: { id: workflowId },
    include: { namespace: true },
  })
  if (!wf) return

  const client = getKestraClient()
  const testFlowId = `${wf.flowId}_test`
  await client.upsertFlow(wf.namespace.kestraNamespace, testFlowId, yaml)
}
```

**流程**：
1. 生成 YAML（前端 toKestraYaml 已传入）
2. 调用 Kestra PUT upsert `{flowId}_test`
3. Kestra 自动创建新 revision
4. 失败 → 记录日志，不影响 Draft 创建（Draft 仍然保存成功）

#### 4.2.3 pushReleaseToKestra

在 releasePublish 中调用。

```typescript
// 在 releasePublish 的 transaction 中：
// 1. 生成 YAML（前端已传入）
// 2. 创建 WorkflowRelease
// 3. 更新 Workflow.publishedVersion
// 4. PUT Kestra {flowId}（正式 flow）

async function pushReleaseToKestra(workflowId: string, yaml: string) {
  const wf = await prisma.workflow.findUnique({
    where: { id: workflowId },
    include: { namespace: true },
  })
  if (!wf) return

  const client = getKestraClient()
  await client.upsertFlow(wf.namespace.kestraNamespace, wf.flowId, yaml)
}
```

#### 4.2.4 executeTest

```typescript
executeTest: t.procedure
  .input(z.object({
    workflowId: z.string(),
    inputValues: z.record(z.string()).optional(),
  }))
  .mutation(async ({ input }) => {
    // 1. 获取 workflow + namespace
    const wf = await prisma.workflow.findUnique({
      where: { id: input.workflowId },
      include: { namespace: true },
    })
    if (!wf) throw new TRPCError({ code: "NOT_FOUND" })

    // 2. 检查 Kestra 健康
    const client = getKestraClient()
    const healthy = await client.isHealthy()
    if (!healthy) throw new TRPCError({
      code: "SERVICE_UNAVAILABLE",
      message: "Kestra 不可达，请检查连接",
    })

    // 3. 触发执行
    const testFlowId = `${wf.flowId}_test`
    const execution = await client.triggerExecution(
      wf.namespace.kestraNamespace,
      testFlowId,
      input.inputValues,
    )

    // 4. 创建本地执行记录
    return prisma.workflowDraftExecution.create({
      data: {
        workflowId: input.workflowId,
        kestraExecId: execution.id,
        nodes: wf.nodes,
        edges: wf.edges,
        inputs: wf.inputs,
        variables: wf.variables,
        inputValues: input.inputValues ?? {},
        state: execution.state.current,
        taskRuns: execution.taskRunList ?? [],
        triggeredBy: "manual",
        startedAt: execution.state.startDate
          ? new Date(execution.state.startDate)
          : undefined,
      },
    })
  })
```

#### 4.2.5 executionGet

```typescript
executionGet: t.procedure
  .input(z.object({ executionId: z.string() }))
  .query(async ({ input }) => {
    // 优先从本地 DB 获取
    const local = await prisma.workflowDraftExecution.findUnique({
      where: { id: input.executionId },
    })
    if (local) {
      // 如果非终态，同步 Kestra 最新状态
      if (!isTerminalState(local.state)) {
        return syncSingleExecution(local)
      }
      return local
    }

    // 查正式执行
    const release = await prisma.workflowExecution.findUnique({
      where: { id: input.executionId },
    })
    if (release && !isTerminalState(release.state)) {
      return syncSingleReleaseExecution(release)
    }
    return release
  })
```

#### 4.2.6 executionList

```typescript
executionList: t.procedure
  .input(z.object({
    workflowId: z.string(),
    type: z.enum(["draft", "release"]),
    state: z.string().optional(),
    limit: z.number().min(1).max(100).default(20),
    cursor: z.string().optional(),
  }))
  .query(async ({ input }) => {
    const table = input.type === "draft"
      ? prisma.workflowDraftExecution
      : prisma.workflowExecution

    const where: Record<string, unknown> = {
      workflowId: input.workflowId,
    }
    if (input.state) where.state = input.state

    const items = await table.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: input.limit + 1,
      ...(input.cursor ? { cursor: { id: input.cursor }, skip: 1 } : {}),
    })

    const hasMore = items.length > input.limit
    if (hasMore) items.pop()

    return {
      items,
      nextCursor: hasMore ? items[items.length - 1].id : null,
    }
  })
```

#### 4.2.7 executionKill

```typescript
executionKill: t.procedure
  .input(z.object({ executionId: z.string() }))
  .mutation(async ({ input }) => {
    const exec = await prisma.workflowDraftExecution.findUnique({
      where: { id: input.executionId },
    })
    if (!exec) throw new TRPCError({ code: "NOT_FOUND" })

    const client = getKestraClient()
    await client.killExecution(exec.kestraExecId)

    // Kestra 状态不会立即更新，前端轮询会同步
    return { success: true }
  })
```

#### 4.2.8 executionReplay

```typescript
executionReplay: t.procedure
  .input(z.object({
    executionId: z.string(),
    taskRunId: z.string(),
  }))
  .mutation(async ({ input }) => {
    // 获取原始执行记录
    const exec = await prisma.workflowDraftExecution.findUnique({
      where: { id: input.executionId },
    })
    if (!exec) throw new TRPCError({ code: "NOT_FOUND" })

    const client = getKestraClient()
    const newExec = await client.replayExecution(
      exec.kestraExecId,
      input.taskRunId,
      true, // latestRevision: true
    )

    // 创建新的执行记录（标记为 replay 触发）
    return prisma.workflowDraftExecution.create({
      data: {
        workflowId: exec.workflowId,
        kestraExecId: newExec.id,
        nodes: exec.nodes,
        edges: exec.edges,
        inputs: exec.inputs,
        variables: exec.variables,
        inputValues: exec.inputValues,
        state: newExec.state.current,
        taskRuns: newExec.taskRunList ?? [],
        triggeredBy: `replay:${input.executionId}:${input.taskRunId}`,
      },
    })
  })
```

#### 4.2.9 executionLogs

```typescript
executionLogs: t.procedure
  .input(z.object({
    kestraExecId: z.string(),
    taskRunId: z.string().optional(),
    minLevel: z.enum(["TRACE", "DEBUG", "INFO", "WARN", "ERROR"]).optional(),
  }))
  .query(async ({ input }) => {
    const client = getKestraClient()
    return client.getExecutionLogs(input.kestraExecId, {
      taskRunId: input.taskRunId,
      minLevel: input.minLevel,
    })
  })
```

#### 4.2.10 syncExecutions

后端定时任务（cron 每 10 分钟）调用，同步非终态执行记录。

```typescript
syncExecutions: t.procedure
  .mutation(async () => {
    const client = getKestraClient()

    // 找出所有非终态的执行记录
    const running = await prisma.workflowDraftExecution.findMany({
      where: {
        state: { notIn: TERMINAL_STATES },
      },
    })

    const results = await Promise.allSettled(
      running.map(async (exec) => {
        const kestraExec = await client.getExecution(exec.kestraExecId)
        await prisma.workflowDraftExecution.update({
          where: { id: exec.id },
          data: {
            state: kestraExec.state.current,
            taskRuns: kestraExec.taskRunList ?? [],
            startedAt: kestraExec.state.startDate
              ? new Date(kestraExec.state.startDate)
              : exec.startedAt,
            endedAt: kestraExec.state.endDate
              ? new Date(kestraExec.state.endDate)
              : undefined,
          },
        })
      }),
    )

    return {
      synced: results.filter((r) => r.status === "fulfilled").length,
      failed: results.filter((r) => r.status === "rejected").length,
    }
  })
```

---

## 5. 前端实现

### 5.1 Store 扩展

```typescript
// stores/workflow.ts — 新增字段

interface ExecutionState {
  isExecuting: boolean
  currentExecution: DraftExecutionSummary | null
  executionPolling: ReturnType<typeof setInterval> | null
}

interface DraftExecutionSummary {
  id: string
  kestraExecId: string
  state: string
  taskRuns: TaskRun[]
  triggeredBy: string
  createdAt: string
}

type TaskRun = {
  id: string
  taskId: string      // 节点 ID
  state: string       // 节点执行状态
  startDate: string
  endDate?: string
  attempts?: number
  outputs?: Record<string, unknown>
}

// 新增 actions
interface WorkflowStore {
  // ... 现有字段 ...
  
  // 执行状态
  isExecuting: boolean
  currentExecution: DraftExecutionSummary | null
  kestraHealthy: boolean
  
  setIsExecuting: (v: boolean) => void
  setCurrentExecution: (exec: DraftExecutionSummary | null) => void
  setKestraHealthy: (v: boolean) => void
}
```

### 5.2 画布运行态

**设计态 + 运行态叠加渲染**：

```typescript
// 实际节点色 = 设计态背景色 + 运行态边框色

const stateColors: Record<string, { border: string; glow: string; overlay?: string }> = {
  CREATED:   { border: "#94a3b8", glow: "0 0 8px #94a3b8" },            // 灰：排队
  RUNNING:   { border: "#3b82f6", glow: "0 0 12px #3b82f6", overlay: "rgba(59,130,246,0.08)" }, // 蓝：运行
  SUCCESS:   { border: "#22c55e", glow: "0 0 8px #22c55e" },            // 绿：成功
  FAILED:    { border: "#ef4444", glow: "0 0 12px #ef4444", overlay: "rgba(239,68,68,0.08)" },  // 红：失败
  WARNING:   { border: "#f59e0b", glow: "0 0 8px #f59e0b" },            // 黄：警告
  KILLED:    { border: "#6b7280", glow: "0 0 6px #6b7280" },            // 灰暗：杀死
  CANCELLED: { border: "#6b7280", glow: "0 0 6px #6b7280" },            // 灰暗：取消
}
```

**实现方式**：在 `WorkflowNode` 组件中，通过 `useWorkflowStore` 获取 `currentExecution`，按 `taskId` 匹配 `taskRuns`，叠加边框 + 发光效果。

```tsx
// WorkflowNode.tsx — 运行态叠加
function useNodeExecutionState(nodeId: string) {
  const currentExecution = useWorkflowStore((s) => s.currentExecution)
  if (!currentExecution) return null
  
  const taskRun = currentExecution.taskRuns.find(
    (tr: TaskRun) => tr.taskId === nodeId,
  )
  return taskRun ?? null
}

// 在节点 div 上：
<div
  style={{
    // ... 原有样式 ...
    ...(taskRun && {
      boxShadow: stateColors[taskRun.state]?.glow,
      borderColor: stateColors[taskRun.state]?.border,
      borderWidth: 2,
    }),
    ...(taskRun?.state === "RUNNING" && {
      animation: "pulse-border 1.5s ease-in-out infinite",
    }),
  }}
>
```

### 5.3 工具栏扩展

```
现有工具栏
  ... 保存/存草稿/草稿历史/发布/版本历史/YAML ...
  │ ▼ 测试（下拉菜单）
  │   ├── ▶ 运行测试
  │   ├── ⏹ 停止执行
  │   └── 📋 执行历史
  │
  └── 🔗 状态指示器
      ● Kestra 已连接 / ○ Kestra 未连接
```

### 5.4 测试运行流程

```
用户点击「▶ 运行测试」
  → 弹出 InputValues 表单（如有 inputs 定义）
  → 调用 executeTest mutation
  → 创建 WorkflowDraftExecution
  → 前面自动清空，显示"执行中..." toast
  → 开始轮询（2-3s）
    → 更新 currentExecution
    → 画布节点逐个变色
  → 执行完成 → toast "执行成功/失败"
  → 停止轮询
```

### 5.5 前端轮询

```typescript
// 在 WorkflowEditorPage 中
const POLL_INTERVAL = 3000 // 3 秒

useEffect(() => {
  if (!currentExecution || isTerminalState(currentExecution.state)) {
    if (executionPolling) {
      clearInterval(executionPolling)
      setExecutionPolling(null)
    }
    return
  }

  const timer = setInterval(async () => {
    const result = await utils.workflow.executionGet.fetch({
      executionId: currentExecution.id,
    })
    if (result) {
      setCurrentExecution({
        id: result.id,
        kestraExecId: result.kestraExecId,
        state: result.state,
        taskRuns: result.taskRuns as TaskRun[],
        triggeredBy: result.triggeredBy,
        createdAt: result.createdAt.toISOString(),
      })
    }
  }, POLL_INTERVAL)

  setExecutionPolling(timer)
  return () => clearInterval(timer)
}, [currentExecution?.id, currentExecution?.state])
```

### 5.6 执行详情抽屉

底部抽屉组件，分三个 Tab：

```
┌─────────────────────────────────────────────┐
│  执行详情        [概览] [任务列表] [日志]   × │
├─────────────────────────────────────────────┤
│                                             │
│  概览 Tab：                                  │
│  ├── 执行 ID：exec_xxxxx                    │
│  ├── 状态：RUNNING (进度 3/5)               │
│  ├── 触发方式：手动测试                      │
│  ├── 开始时间：2026-03-21 22:30:00          │
│  └── 耗时：12.5s                            │
│                                             │
│  任务列表 Tab：                              │
│  ├── ✅ Step 1 - getData     2.1s           │
│  ├── ✅ Step 2 - transform   0.8s           │
│  ├── 🔄 Step 3 - validate    running...     │
│  ├── ⏳ Step 4 - save                       │
│  └── ⏳ Step 5 - notify                     │
│                                             │
│  日志 Tab：                                  │
│  ├── 22:30:00 [INFO] Starting execution     │
│  ├── 22:30:01 [INFO] Step 1 completed       │
│  ├── 22:30:02 [WARN] Slow query detected    │
│  └── ▼ 按任务筛选 + 日志级别筛选             │
│                                             │
│  [⏹ 停止]  [🔄 Replay 失败节点]             │
└─────────────────────────────────────────────┘
```

### 5.7 Replay 流程

```
执行失败（Step 3 失败）
  → 用户看到画布上 Step 3 标红
  → 打开执行详情
  → 在「任务列表」中右键 Step 3
  → 弹出菜单：「从这里重跑」
  → 确认弹窗："将从 Step 3 开始重跑，前面的输出将复用"
  → 调用 executionReplay mutation
  → 创建新 WorkflowDraftExecution
  → 开始轮询
```

### 5.8 执行历史列表

右侧抽屉，类似 DraftHistory：

```
┌─────────────────────────────────────┐
│  执行历史                    ×      │
├─────────────────────────────────────┤
│  ▼ 手动测试                         │
│    🟢 exec_001  成功  12.5s         │
│       2026-03-21 22:30              │
│    🔴 exec_002  失败  8.2s          │
│       2026-03-21 22:15              │
│                                     │
│  ▼ Replay                          │
│    🔴 exec_003  失败  5.1s          │
│       从 exec_002 Step 3 重跑       │
│                                     │
│  [加载更多...]                      │
└─────────────────────────────────────┘
```

---

## 6. Kestra 同步规则

### 6.1 操作 → Kestra 映射

| 操作 | 推 Kestra？ | Kestra flowId |
|------|------------|---------------|
| 保存草稿 | ✅（自动创建新 revision） | `{flowId}_test` |
| 测试运行 | ✅（触发执行） | `{flowId}_test` |
| 发布版本 | ✅（创建正式 flow） | `{flowId}`（正式） |
| 创建 Trigger | ✅（创建 wrapper） | `__trigger_{workflowId}_{name}` |
| 回滚草稿 | ❌（本地 DB 操作） | — |
| 版本回滚 | ❌（本地 DB 操作） | — |

### 6.2 {flowId}_test vs {flowId}

| | `{flowId}_test` | `{flowId}`（正式） |
|--|-----------------|-------------------|
| 触发方式 | 手动测试、Replay | Trigger 调度、手动触发 |
| 数据来源 | WorkflowDraftExecution | WorkflowExecution |
| 版本 | 草稿快照 | Release 版本 |
| Wrapper | 无 | Trigger wrapper |

### 6.3 Kestra 不可达处理

- **启动检测**：应用启动时 `refreshHealth()`，结果存 `kestraHealthy`
- **定时刷新**：每 5 分钟刷新一次健康状态
- **UI 响应**：
  - 执行按钮 disabled + tooltip "Kestra 未连接"
  - 工具栏显示连接状态指示器（🟢/🔴）
  - 草稿保存仍然正常（只存本地 DB）

---

## 7. 状态同步机制

### 7.1 双轨同步

```
前端轮询（2-3s）
  ├── 用户在页面 → 实时更新
  ├── 终态 → 停止轮询
  └── 用户离开 → 停止

后端定时任务（10min）
  ├── 查所有非终态执行
  ├── 批量同步 Kestra 状态
  └── 写入 DB
```

### 7.2 状态定义

```typescript
const TERMINAL_STATES = [
  "SUCCESS", "WARNING", "FAILED", "KILLED", "CANCELLED", "RETRIED",
]

function isTerminalState(state: string): boolean {
  return TERMINAL_STATES.includes(state)
}
```

### 7.3 同步函数

```typescript
async function syncSingleExecution(exec: WorkflowDraftExecution) {
  const client = getKestraClient()
  const kestraExec = await client.getExecution(exec.kestraExecId)

  return prisma.workflowDraftExecution.update({
    where: { id: exec.id },
    data: {
      state: kestraExec.state.current,
      taskRuns: kestraExec.taskRunList ?? [],
      startedAt: kestraExec.state.startDate
        ? new Date(kestraExec.state.startDate)
        : exec.startedAt,
      endedAt: kestraExec.state.endDate
        ? new Date(kestraExec.state.endDate)
        : undefined,
    },
  })
}
```

---

## 8. 分阶段实现

### Phase 1（2 天）：Kestra 代理 + 保存推 Kestra

- [ ] Prisma Schema：WorkflowDraftExecution + WorkflowExecution + WorkflowTrigger 表
- [ ] `kestra-client.ts`：KestraClient 类 + 健康检查
- [ ] 环境变量 + Docker Compose 配置
- [ ] 修改 draftSave：Draft 创建后异步推 Kestra `{flowId}_test`
- [ ] 修改 releasePublish：Transaction 后推 Kestra `{flowId}`
- [ ] kestraHealth API

### Phase 2（2 天）：测试运行 + 执行监控

- [ ] executeTest API
- [ ] executionGet / executionList API
- [ ] executionKill API
- [ ] 前端轮询逻辑
- [ ] 画布运行态（节点边框发光 + 状态叠加）
- [ ] 「▶ 运行测试」按钮 + InputValues 表单

### Phase 3（2 天）：执行详情 + Replay

- [ ] executionReplay API
- [ ] executionLogs API
- [ ] 执行详情抽屉组件（3 个 Tab）
- [ ] Replay 菜单（右键失败节点）
- [ ] 执行历史列表面板
- [ ] syncExecutions 定时任务

### Phase 4（1 天）：Trigger 表 + 健康检查 UI

- [ ] Trigger CRUD API（基础 CRUD）
- [ ] 健康检查指示器 UI
- [ ] 后端启动时健康检查
- [ ] 全量集成测试
- [ ] 错误处理 + 边界场景

---

## 9. 边界场景

| 场景 | 处理方式 |
|------|---------|
| Kestra 不可达 | 执行按钮置灰，草稿保存正常，显示提示 |
| 执行中编辑画布 | 禁止编辑（execution polling 期间锁定画布） |
| 执行中刷新页面 | 定时任务兜底（最多延迟 10 分钟） |
| 多用户同时看同一执行 | 各自轮询，互不影响 |
| Replay 时草稿已修改 | latestRevision: true，用最新代码重跑 |
| 草稿推 Kestra 失败 | Draft 仍然保存成功，toast 提示 Kestra 同步失败 |
| 执行超长时间 | 轮询持续，关闭页面后定时任务兜底 |
| Kestra API 返回意外状态 | 记录日志，前端显示"未知状态: XXX" |

---

## 10. 文件变更清单

### 后端新增

| 文件 | 说明 |
|------|------|
| `apps/api/src/lib/kestra-client.ts` | KestraClient 类 |
| `apps/api/src/lib/kestra-types.ts` | Kestra API 类型定义 |
| `apps/api/src/jobs/sync-executions.ts` | 定时同步任务 |
| `.env.example` | 新增 KESTRA_* 环境变量 |

### 后端改动

| 文件 | 说明 |
|------|------|
| `apps/api/prisma/schema.prisma` | 3 个新表 + Workflow 关联 |
| `apps/api/src/routers/workflow.ts` | 10+ 个新 API |
| `apps/api/src/db.ts` | 定时任务注册 |

### 前端新增

| 文件 | 说明 |
|------|------|
| `apps/web/src/components/flow/ExecutionDrawer.tsx` | 执行详情抽屉 |
| `apps/web/src/components/flow/ExecutionHistory.tsx` | 执行历史列表 |
| `apps/web/src/components/flow/ExecutionBadge.tsx` | 节点状态指示器 |
| `apps/web/src/components/flow/InputValuesForm.tsx` | 执行输入表单 |

### 前端改动

| 文件 | 说明 |
|------|------|
| `apps/web/src/stores/workflow.ts` | 执行状态 + actions |
| `apps/web/src/components/flow/WorkflowNode.tsx` | 运行态叠加渲染 |
| `apps/web/src/pages/WorkflowEditorPage.tsx` | 工具栏扩展 + 轮询 + 抽屉 |

---

## 11. 验收标准

- [ ] 保存草稿后 Kestra 能看到对应 `{flowId}_test` flow
- [ ] 发布版本后 Kestra 能看到对应 `{flowId}` 正式 flow
- [ ] 点「▶ 运行测试」能触发 Kestra 执行，画布实时显示节点状态
- [ ] 执行详情抽屉展示 taskRuns 和日志
- [ ] 失败后修改代码 → 保存 → Replay 失败节点，用新代码重跑
- [ ] 执行历史列表能查看历史执行记录
- [ ] Kestra 不可达时执行按钮置灰，草稿保存不受影响
- [ ] 关页面后定时任务能同步未完成的执行状态

---

*画皮先生 🎨 — M4 技术设计文档*
