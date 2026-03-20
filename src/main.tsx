import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// Monaco 自托管配置 — 使用官方 AMD loader
// MonacoEnvironment 必须在 Monaco 加载前设置
;(globalThis as any).MonacoEnvironment = {
  getWorker(_: unknown, label: string) {
    // 使用 inline worker，避免 worker 文件加载问题
    const workerMap: Record<string, string> = {
      editorWorkerService: `importScripts('${window.location.origin}/monaco-editor/min/vs/base/worker/workerMain.js')`,
      json: `importScripts('${window.location.origin}/monaco-editor/min/vs/language/json/json.worker.js')`,
      css: `importScripts('${window.location.origin}/monaco-editor/min/vs/language/css/css.worker.js')`,
      html: `importScripts('${window.location.origin}/monaco-editor/min/vs/language/html/html.worker.js')`,
      typescript: `importScripts('${window.location.origin}/monaco-editor/min/vs/language/typescript/ts.worker.js')`,
    }
    const code = workerMap[label] || workerMap.editorWorkerService
    const blob = new Blob([code], { type: "application/javascript" })
    return new Worker(URL.createObjectURL(blob))
  },
}

import loader from "@monaco-editor/loader"

// 使用本地 Monaco 文件，不走 CDN
loader.config({
  paths: { vs: "/monaco-editor/min/vs" },
})

import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
