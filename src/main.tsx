import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import loader from "@monaco-editor/loader"

// Load Monaco from local public directory (no CDN needed)
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
