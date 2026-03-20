import { initTRPC } from "@trpc/server"
import superjson from "superjson"
import { workflowRouter } from "./routers/workflow.js"

const t = initTRPC.create({ transformer: superjson })

export const appRouter = t.router({
  health: t.procedure.query(() => ({
    status: "ok" as const,
    timestamp: new Date(),
  })),
  workflow: workflowRouter,
})

export type AppRouter = typeof appRouter
