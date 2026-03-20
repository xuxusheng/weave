import { initTRPC } from "@trpc/server"
import { z } from "zod"
import superjson from "superjson"

const t = initTRPC.create({ transformer: superjson })

const appRouter = t.router({
  // Health check
  health: t.procedure.query(() => ({ status: "ok", timestamp: new Date() })),

  // Workflow CRUD (placeholder)
  workflow: t.router({
    list: t.procedure.query(() => {
      return [{ id: "demo", name: "Demo Workflow", createdAt: new Date() }]
    }),

    get: t.procedure
      .input(z.object({ id: z.string() }))
      .query(({ input }) => {
        return {
          id: input.id,
          name: "Demo Workflow",
          nodes: [],
          edges: [],
          inputs: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      }),

    create: t.procedure
      .input(
        z.object({
          name: z.string().min(1),
          namespace: z.string().default("company.team"),
          nodes: z.array(z.any()).default([]),
          edges: z.array(z.any()).default([]),
          inputs: z.array(z.any()).default([]),
        }),
      )
      .mutation(({ input }) => {
        return {
          id: `wf_${Date.now()}`,
          ...input,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      }),

    generateYaml: t.procedure
      .input(
        z.object({
          workflowId: z.string(),
          namespace: z.string(),
          nodes: z.array(
            z.object({
              id: z.string(),
              label: z.string(),
              taskConfig: z.string(),
            }),
          ),
          edges: z.array(
            z.object({
              source: z.string(),
              target: z.string(),
            }),
          ),
          inputs: z.array(
            z.object({
              id: z.string(),
              type: z.string(),
              defaults: z.string().optional(),
              description: z.string().optional(),
              required: z.boolean().optional(),
            }),
          ),
        }),
      )
      .mutation(({ input }) => {
        // TODO: Generate Kestra YAML from workflow data
        const yaml = `id: ${input.workflowId}\nnamespace: ${input.namespace}\n# TODO: generate tasks from nodes`
        return { yaml }
      }),
  }),
})

export type AppRouter = typeof appRouter
export { appRouter }
