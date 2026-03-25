/**
 * API 数据转换层 — API ↔ 前端类型
 */
import { z } from "zod";
import type { WorkflowNode, WorkflowEdge, WorkflowInput, EdgeType } from "@/types/workflow";
import type { ExecutionSummary, TaskRun } from "@/stores/workflow";
import type { ApiWorkflowNode, ApiWorkflowEdge, ApiWorkflowInput } from "@/types/api";

const TaskRunSchema = z
  .object({
    id: z.string().optional(),
    taskId: z.string().optional(),
    state: z.union([z.string(), z.object({ current: z.string() }).passthrough()]).optional(),
    startDate: z.union([z.string(), z.date()]).optional(),
    endDate: z.union([z.string(), z.date()]).optional(),
    attempts: z.number().optional(),
    outputs: z.record(z.string(), z.unknown()).optional(),
  })
  .passthrough();

const TaskRunsArraySchema = z.array(TaskRunSchema);

export function fromApiNode(n: ApiWorkflowNode): WorkflowNode {
  return {
    id: n.id,
    type: n.type,
    name: n.name,
    description: n.description,
    containerId: n.containerId,
    sortIndex: n.sortIndex,
    spec: n.spec ?? {},
    ui: n.ui,
  };
}

export function fromApiEdge(e: ApiWorkflowEdge): WorkflowEdge {
  return {
    id: e.id,
    source: e.source,
    target: e.target,
    type: e.type,
    label: e.label,
  };
}

export function fromApiInput(i: ApiWorkflowInput): WorkflowInput {
  return {
    id: i.id,
    type: i.type,
    displayName: i.displayName,
    description: i.description,
    required: i.required,
    defaults: i.defaults,
    values: i.values,
  };
}

function inferEdgeType(sourceHandle: string | null): EdgeType {
  if (sourceHandle === "then" || sourceHandle === "else") return sourceHandle;
  if (sourceHandle?.startsWith("case-")) return "case";
  return "sequence";
}

function parseTaskRun(raw: Record<string, unknown>): TaskRun {
  const idValue = raw.id;
  const taskIdValue = raw.taskId;
  const stateValue = raw.state;

  let stateStr = "UNKNOWN";
  if (typeof stateValue === "string") {
    stateStr = stateValue;
  } else if (typeof stateValue === "object" && stateValue !== null && "current" in stateValue) {
    const currentState = (stateValue as Record<string, unknown>).current;
    stateStr = typeof currentState === "string" ? currentState : "UNKNOWN";
  }

  return {
    id: typeof idValue === "string" ? idValue : idValue != null ? JSON.stringify(idValue) : "",
    taskId:
      typeof taskIdValue === "string"
        ? taskIdValue
        : taskIdValue != null
          ? JSON.stringify(taskIdValue)
          : "",
    state: stateStr,
    startDate:
      raw.startDate instanceof Date
        ? raw.startDate.toISOString()
        : typeof raw.startDate === "string"
          ? raw.startDate
          : undefined,
    endDate:
      raw.endDate instanceof Date
        ? raw.endDate.toISOString()
        : typeof raw.endDate === "string"
          ? raw.endDate
          : undefined,
    attempts: typeof raw.attempts === "number" ? raw.attempts : undefined,
    outputs: raw.outputs as Record<string, unknown> | undefined,
  };
}

function toExecutionSummary(result: {
  id: string;
  kestraExecId: string;
  state: string;
  taskRuns: unknown;
  triggeredBy: string;
  createdAt: Date | string;
  endedAt?: Date | string | null;
}): ExecutionSummary {
  const parseResult = TaskRunsArraySchema.safeParse(result.taskRuns ?? []);
  const rawArray = parseResult.success ? parseResult.data : [];

  const taskRuns: TaskRun[] = rawArray.map((tr) => parseTaskRun(tr as Record<string, unknown>));

  return {
    id: result.id,
    kestraExecId: result.kestraExecId,
    state: result.state,
    taskRuns,
    triggeredBy: result.triggeredBy,
    createdAt:
      result.createdAt instanceof Date ? result.createdAt.toISOString() : String(result.createdAt),
    endedAt: result.endedAt
      ? result.endedAt instanceof Date
        ? result.endedAt.toISOString()
        : String(result.endedAt)
      : undefined,
  };
}

export { inferEdgeType, toExecutionSummary };
