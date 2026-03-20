import { useState } from "react"
import { MonacoVariableEditor } from "@/components/monaco-variable-editor"
import { parseVariables, getAllVariables, defaultVariableGroups } from "@/types/variables"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const DOUBLE_BRACE = "{{"

const INITIAL_VALUE = [
  '尊敬的「{{ input.userName }}」，您好！',
  "",
  '您的订单「{{ input.orderId }}」已确认，',
  '商品：「{{ input.productName }}」',
  '金额：「{{ input.amount }}」元',
  '将发送至「{{ input.email }}」。',
  "",
  "// 👇 试试在下方输入 {{ 触发变量补全",
  "",
].join("\n")

export default function App() {
  const [value, setValue] = useState(INITIAL_VALUE)
  const allVariables = getAllVariables(defaultVariableGroups)
  const parsed = parseVariables(value)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Monaco 变量编辑器
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            React 19 + Vite 8 + Tailwind CSS v4 + shadcn/ui · 输入{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
              {DOUBLE_BRACE}
            </code>{" "}
            触发变量补全
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Editor */}
          <div>
            <MonacoVariableEditor
              value={value}
              onChange={setValue}
              height="480px"
            />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Variables */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  🔍 解析到的变量
                  <Badge variant="secondary" className="text-xs">
                    {parsed.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1.5">
                  {parsed.map((v, i) => {
                    const item = allVariables.find((a) => a.value === v.variable)
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted/50 text-sm"
                      >
                        <span className="text-base">{item?.icon ?? "❓"}</span>
                        <span className="font-medium text-primary">
                          {item?.label ?? v.variable}
                        </span>
                        <code className="text-xs text-muted-foreground ml-auto font-mono">
                          {v.variable}
                        </code>
                      </div>
                    )
                  })}
                  {parsed.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      还没有引用变量
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Raw value */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">
                  📄 实际值（后端收到的）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md overflow-auto max-h-40 whitespace-pre-wrap break-all font-mono">
                  {value}
                </pre>
              </CardContent>
            </Card>

            {/* Usage */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">
                  💡 使用说明
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">·</span>
                    输入{" "}
                    <code className="bg-muted px-1 rounded text-xs font-mono">
                      {DOUBLE_BRACE}
                    </code>{" "}
                    自动弹出补全
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">·</span>
                    <code className="bg-muted px-1 rounded text-xs font-mono">
                      Ctrl+Space
                    </code>{" "}
                    手动触发
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">·</span>
                    下拉中输入文字搜索过滤
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">·</span>
                    悬停标签查看变量详情
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground text-center">
          Vite 8 · React 19 · TypeScript 5.9 · Tailwind CSS v4 · shadcn/ui · Monaco Editor
        </p>
      </div>
    </div>
  )
}
