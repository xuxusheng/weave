/**
 * kestra-types.ts — Kestra API 响应类型定义
 *
 * 基于 Kestra 0.17+ API，按需扩展。
 */

// ========== Execution ==========

export interface KestraExecutionState {
  current: string
  startDate?: string
  endDate?: string
  duration?: number
}

export interface KestraTaskRun {
  id: string
  taskId: string
  state: KestraExecutionState
  startDate?: string
  endDate?: string
  attempts?: number
  outputs?: Record<string, unknown>
  parentId?: string
  value?: string
}

export interface KestraExecution {
  id: string
  namespace: string
  flowId: string
  state: KestraExecutionState
  taskRunList?: KestraTaskRun[]
  inputs?: Record<string, unknown>
  outputs?: Record<string, unknown>
  parentId?: string
  originalId?: string
}

export interface KestraExecutionPage {
  results: KestraExecution[]
  total: number
}

// ========== Flow ==========

export interface KestraFlow {
  id: string
  namespace: string
  revision?: number
  tasks?: unknown[]
  source?: string
}

// ========== Log ==========

export interface KestraLogEntry {
  timestamp: string
  level: string
  message: string
  thread?: string
  taskRunId?: string
  task?: string
}

export interface KestraLogPage {
  results: KestraLogEntry[]
  total: number
}
