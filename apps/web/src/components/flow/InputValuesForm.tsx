/**
 * InputValuesForm.tsx — 执行输入表单
 *
 * 测试运行前弹出，让用户填写 input 值
 */

import { useState, useCallback } from "react"
import type { WorkflowInput } from "@/types/workflow"

interface InputValuesFormProps {
  inputs: WorkflowInput[]
  onSubmit: (values: Record<string, string>) => void
  onCancel: () => void
}

export function InputValuesForm({ inputs, onSubmit, onCancel }: InputValuesFormProps) {
  const [values, setValues] = useState<Record<string, string>>({})

  const handleChange = useCallback((id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }))
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit(values)
    },
    [values, onSubmit],
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-md mx-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h3 className="text-sm font-semibold">▶ 运行测试</h3>
          <button onClick={onCancel} className="text-muted-foreground hover:text-foreground text-lg leading-none">✕</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {inputs.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              该工作流没有定义输入参数，点击运行直接执行。
            </p>
          ) : (
            inputs.map((input) => (
              <div key={input.id} className="space-y-1">
                <label className="text-xs font-medium">
                  {input.displayName || input.id}
                  {input.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {input.description && (
                  <p className="text-xs text-muted-foreground">{input.description}</p>
                )}
                {input.type === "SELECT" || input.type === "MULTISELECT" ? (
                  <select
                    value={values[input.id] ?? ""}
                    onChange={(e) => handleChange(input.id, e.target.value)}
                    required={input.required}
                    className="w-full text-sm bg-muted border border-border rounded-md px-3 py-2"
                  >
                    <option value="">请选择...</option>
                    {(input.values ?? []).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                ) : input.type === "BOOL" ? (
                  <select
                    value={values[input.id] ?? ""}
                    onChange={(e) => handleChange(input.id, e.target.value)}
                    required={input.required}
                    className="w-full text-sm bg-muted border border-border rounded-md px-3 py-2"
                  >
                    <option value="">请选择...</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                ) : (
                  <input
                    type={input.type === "INT" || input.type === "FLOAT" ? "number" : "text"}
                    value={values[input.id] ?? ""}
                    onChange={(e) => handleChange(input.id, e.target.value)}
                    required={input.required}
                    placeholder={input.defaults != null ? String(input.defaults) : ""}
                    className="w-full text-sm bg-muted border border-border rounded-md px-3 py-2"
                  />
                )}
              </div>
            ))
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-xs font-medium rounded-md border border-border hover:bg-muted transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              ▶ 运行
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
