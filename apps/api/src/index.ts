import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { appRouter } from "./router.js"
import { prisma } from "./db.js"

const app = new Hono()

// Middleware
app.use(logger())
app.use("/*", cors())

// tRPC endpoint
app.all("/api/trpc/*", (c) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: c.req.raw,
    router: appRouter,
    createContext: () => ({ prisma }),
  })
})

// Health check
app.get("/health", (c) => c.json({ status: "ok" }))

// Global error handler
app.onError((err, c) => {
  console.error("Unhandled error:", err)
  return c.json(
    {
      error: err.message ?? "Internal Server Error",
    },
    err instanceof Error && "status" in err ? (err as any).status : 500,
  )
})

// 404
app.notFound((c) => c.json({ error: "Not Found" }, 404))

const port = Number(process.env.PORT) || 3001

const server = serve({ fetch: app.fetch, port }, (info) => {
  console.log(`🚀 API server running on http://localhost:${info.port}`)
})

// Graceful shutdown
function shutdown(signal: string) {
  console.log(`\n${signal} received, shutting down...`)
  server.close(async () => {
    await prisma.$disconnect()
    console.log("Server closed")
    process.exit(0)
  })
}

process.on("SIGTERM", () => shutdown("SIGTERM"))
process.on("SIGINT", () => shutdown("SIGINT"))
