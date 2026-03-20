import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { appRouter } from "./router.js"

const app = new Hono()

// CORS for frontend
app.use(
  "/api/*",
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"],
    allowMethods: ["GET", "POST", "OPTIONS"],
  }),
)

// tRPC endpoint
app.all("/api/trpc/*", (c) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: c.req.raw,
    router: appRouter,
    createContext: () => ({}),
  })
})

// Health check
app.get("/health", (c) => c.json({ status: "ok" }))

const port = Number(process.env.PORT) || 3001

console.log(`🚀 API server running on http://localhost:${port}`)

serve({ fetch: app.fetch, port })
