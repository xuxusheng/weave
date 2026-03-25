export {}

declare global {
  namespace PrismaJson {
    type WorkflowNode = {
      id: string
      type: string
      name: string
      description?: string
      containerId: string | null
      sortIndex: number
      spec: Record<string, unknown>
      ui?: {
        x: number
        y: number
        collapsed?: boolean
      }
    }

    type WorkflowEdge = {
      id: string
      source: string
      target: string
      type: "sequence" | "containment" | "then" | "else" | "case" | "errors" | "finally"
      label?: string
    }

    type WorkflowInput = {
      id: string
      type:
        | "STRING"
        | "INT"
        | "FLOAT"
        | "BOOL"
        | "SELECT"
        | "MULTISELECT"
        | "DATE"
        | "DATETIME"
        | "TIME"
        | "DURATION"
        | "ARRAY"
        | "JSON"
        | "YAML"
        | "FILE"
        | "URI"
        | "SECRET"
      displayName?: string
      description?: string
      required?: boolean
      defaults?: unknown
      values?: string[]
      allowCustomValue?: boolean
      itemType?: string
      allowedFileExtensions?: string[]
      validator?: {
        regex: string
        message: string
      }
    }

    type WorkflowVariable = {
      key: string
      value: string
      type: "STRING" | "NUMBER" | "BOOLEAN" | "JSON"
      description?: string
    }

    type TaskRun = {
      id: string
      taskId: string
      state: string
      startTime?: string
      endTime?: string
      outputs?: Record<string, unknown>
      attempts?: number
    }

    type InputValues = Record<string, unknown>

    type TriggerConfig = {
      cron?: string
      timezone?: string
      secret?: string
      inputs?: Record<string, unknown>
      [key: string]: unknown
    }
  }
}
