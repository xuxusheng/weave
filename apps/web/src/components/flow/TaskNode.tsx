import { memo } from "react"
import { Handle, Position } from "@xyflow/react"
import type { NodeProps } from "@xyflow/react"

export interface TaskNodeData {
  label: string
  taskConfig: string
  validationStatus?: "ok" | "warning" | "error"
  validationMessages?: string[]
}

export const TaskNode = memo(({ data, selected }: NodeProps) => {
  const d = data as unknown as TaskNodeData
  const taskType = extractTaskType(d.taskConfig)
  const status = d.validationStatus || "ok"

  const statusBadge = {
    ok: null,
    warning: <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-[9px] flex items-center justify-center shadow-sm" title={d.validationMessages?.join("\n")}>⚠</span>,
    error: <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center shadow-sm" title={d.validationMessages?.join("\n")}>✕</span>,
  }

  const borderColor = {
    ok: selected ? "border-indigo-500" : "border-border",
    warning: selected ? "border-amber-400" : "border-amber-300",
    error: selected ? "border-red-500" : "border-red-400",
  }

  return (
    <div
      className={`relative px-4 py-3 rounded-lg border-2 bg-white shadow-sm min-w-[180px] transition-all ${borderColor[status]} ${selected ? "shadow-md" : "hover:shadow-md"}`}
    >
      <Handle type="target" position={Position.Top} className="!w-3 !h-3 !bg-indigo-400 !border-2 !border-white" />

      <div className="flex items-center gap-2">
        <span className="text-lg flex-shrink-0">⚙️</span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-foreground truncate">{d.label || "未命名任务"}</div>
          <div className="text-xs text-muted-foreground mt-0.5 font-mono truncate">{taskType}</div>
        </div>
      </div>

      {statusBadge[status]}

      <Handle type="source" position={Position.Bottom} className="!w-3 !h-3 !bg-indigo-400 !border-2 !border-white" />
    </div>
  )
})

TaskNode.displayName = "TaskNode"

function extractTaskType(yaml: string): string {
  try {
    const lines = yaml.split("\n")
    const typeLine = lines.find((l) => l.trim().startsWith("type:"))
    return typeLine?.replace(/^.*type:\s*/, "").replace(/"/g, "").trim() || "未配置"
  } catch {
    return "解析失败"
  }
}
