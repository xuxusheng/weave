import Editor from "@monaco-editor/react"
import type { KestraInput } from "@/types/kestra"

interface TaskForYaml {
  id: string
  taskConfig: string
}

interface KestraYamlPanelProps {
  workflowId: string
  namespace: string
  description: string
  inputs: KestraInput[]
  tasks: TaskForYaml[]
  onClose: () => void
}

export function KestraYamlPanel({
  workflowId,
  namespace,
  description,
  inputs,
  tasks,
  onClose,
}: KestraYamlPanelProps) {
  const yaml = generateKestraYaml(workflowId, namespace, description, inputs, tasks)

  return (
    <div className="panel-enter fixed top-0 right-0 h-screen w-full md:w-[560px] bg-card border-l border-border shadow-xl z-50 flex flex-col">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-lg">📄</span>
          <h2 className="text-base font-semibold">Kestra YAML 输出</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigator.clipboard.writeText(yaml)}
            className="px-3 py-1.5 rounded-md bg-indigo-500 text-white text-xs font-medium hover:bg-indigo-600 transition-colors"
          >
            复制
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          language="yaml"
          theme="vs"
          value={yaml}
          options={{
            readOnly: true,
            fontSize: 13,
            lineHeight: 22,
            minimap: { enabled: false },
            padding: { top: 12 },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  )
}

function generateKestraYaml(
  workflowId: string,
  namespace: string,
  description: string,
  inputs: KestraInput[],
  tasks: TaskForYaml[],
): string {
  const lines: string[] = []

  lines.push(`id: ${workflowId}`)
  lines.push(`namespace: ${namespace}`)
  if (description) {
    lines.push(`description: "${description}"`)
  }
  lines.push("")

  // Inputs
  if (inputs.length > 0) {
    lines.push("inputs:")
    for (const input of inputs) {
      lines.push(`  - id: ${input.id}`)
      lines.push(`    type: ${input.type}`)
      if (input.defaults !== undefined && input.defaults !== "") {
        lines.push(`    defaults: "${input.defaults}"`)
      }
      if (input.description) {
        lines.push(`    description: "${input.description}"`)
      }
      if (input.required) {
        lines.push(`    required: true`)
      }
    }
    lines.push("")
  }

  // Tasks — taskConfig is already YAML, just indent it
  lines.push("tasks:")
  if (tasks.length > 0) {
    for (const task of tasks) {
      const indented = task.taskConfig
        .split("\n")
        .map((line) => `  ${line}`)
        .join("\n")
      lines.push(indented)
      lines.push("")
    }
  } else {
    lines.push("  # 拖拽任务节点到画布上开始编排")
  }

  return lines.join("\n")
}
