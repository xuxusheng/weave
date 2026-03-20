import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import * as monaco from "monaco-editor"
import loader from "@monaco-editor/loader"

// 官方推荐：直接传入 monaco 模块，跳过 AMD CDN 加载
loader.config({ monaco })

import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
