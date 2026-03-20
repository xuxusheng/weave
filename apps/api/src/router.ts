import { initTRPC } from "@trpc/server"
import { z } from "zod"
import superjson from "superjson"
import { prisma } from "./db.js"

const t = initTRPC.create({ transformer: superjson })

const appRouter = t.router({
  // Health check
  health: t.procedure.query(() => ({ status: "ok", timestamp: new Date() })),

  // Workflow CRUD
  workflow: t.router({
    list: t.procedure.query(() => {
      return prisma.workflow.findMany({
        orderBy: { updatedAt: "desc" },
        select: { id: true, name: true, namespace: true, createdAt: true, updatedAt: true },
      })
    }),

    get: t.procedure
      .input(z.object({ id: z.string() }))
      .query(({ input }) => {
        return prisma.workflow.findUnique({ where: { id: input.id } })
      }),

    create: t.procedure
      .input(
        z.object({
          name: z.string().min(1),
          namespace: z.string().default("company.team"),
          description: z.string().optional(),
          nodes: z.array(z.any()).default([]),
          edges: z.array(z.any()).default([]),
          inputs: z.array(z.any()).default([]),
        }),
      )
      .mutation(({ input }) => {
        return prisma.workflow.create({ data: input })
      }),

    update: t.procedure
      .input(
        z.object({
          id: z.string(),
          name: z.string().optional(),
          namespace: z.string().optional(),
          description: z.string().optional(),
          nodes: z.array(z.any()).optional(),
          edges: z.array(z.any()).optional(),
          inputs: z.array(z.any()).optional(),
        }),
      )
      .mutation(({ input }) => {
        const { id, ...data } = input
        return prisma.workflow.update({ where: { id }, data })
      }),

    delete: t.procedure
      .input(z.object({ id: z.string() }))
      .mutation(({ input }) => {
        return prisma.workflow.delete({ where: { id: input.id } })
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
