import { initTRPC, TRPCError } from "@trpc/server"
import { z } from "zod"
import { Prisma } from "../generated/prisma/client.js"
import { prisma } from "../db.js"
import {
  createWorkflowSchema,
  updateWorkflowSchema,
  generateYamlSchema,
} from "../types.js"

const t = initTRPC.create()

const idSchema = z.object({ id: z.string() })

export const workflowRouter = t.router({
  list: t.procedure.query(() => {
    return prisma.workflow.findMany({
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        name: true,
        namespace: true,
        createdAt: true,
        updatedAt: true,
      },
    })
  }),

  get: t.procedure.input(idSchema).query(({ input }) => {
    return prisma.workflow.findUnique({ where: { id: input.id } })
  }),

  create: t.procedure.input(createWorkflowSchema).mutation(({ input }) => {
    return prisma.workflow.create({ data: input })
  }),

  update: t.procedure.input(updateWorkflowSchema).mutation(async ({ input }) => {
    const { id, ...data } = input
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([, v]) => v !== undefined),
    )
    if (Object.keys(cleanData).length === 0) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "At least one field must be provided for update",
      })
    }
    try {
      return await prisma.workflow.update({ where: { id }, data: cleanData })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Workflow ${id} not found`,
        })
      }
      throw e
    }
  }),

  delete: t.procedure.input(idSchema).mutation(async ({ input }) => {
    try {
      return await prisma.workflow.delete({ where: { id: input.id } })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Workflow ${input.id} not found`,
        })
      }
      throw e
    }
  }),

  generateYaml: t.procedure.input(generateYamlSchema).mutation(({ input }) => {
    const tasks = input.nodes.map((node) => {
      const configLines = node.taskConfig
        .split("\n")
        .map((l) => `      ${l}`)
        .join("\n")
      return `    - id: ${node.label}\n${configLines}`
    })

    const inputsBlock =
      input.inputs.length > 0
        ? `inputs:\n${input.inputs
            .map((i) => {
              const parts = [`  - id: ${i.id}`, `    type: ${i.type}`]
              if (i.description) parts.push(`    description: ${i.description}`)
              if (i.defaults) parts.push(`    defaults: ${i.defaults}`)
              if (i.required) parts.push(`    required: true`)
              return parts.join("\n")
            })
            .join("\n")}\n`
        : ""

    const yaml = [
      `id: ${input.workflowId}`,
      `namespace: ${input.namespace}`,
      inputsBlock,
      `tasks:`,
      tasks.join("\n"),
    ]
      .filter(Boolean)
      .join("\n")

    return { yaml }
  }),
})
