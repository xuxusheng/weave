import { z } from "zod"

// Kestra task node
export const taskNodeSchema = z.object({
  id: z.string(),
  label: z.string(),
  taskConfig: z.string(),
  position: z
    .object({
      x: z.number(),
      y: z.number(),
    })
    .optional(),
})

// Kestra edge (connection between tasks)
export const edgeSchema = z.object({
  source: z.string(),
  target: z.string(),
})

// Kestra input parameter
export const inputSchema = z.object({
  id: z.string(),
  type: z.enum(["STRING", "INT", "FLOAT", "BOOLEAN", "DATETIME", "DATE", "TIME", "DURATION", "FILE", "JSON", "URI", "ARRAY"]),
  defaults: z.string().optional(),
  description: z.string().optional(),
  required: z.boolean().optional(),
})

// Workflow create input
export const createWorkflowSchema = z.object({
  name: z.string().min(1),
  namespace: z.string().default("company.team"),
  description: z.string().optional(),
  nodes: z.array(taskNodeSchema).default([]),
  edges: z.array(edgeSchema).default([]),
  inputs: z.array(inputSchema).default([]),
})

// Workflow update input
export const updateWorkflowSchema = z.object({
  id: z.string(),
  name: z.string().min(1).optional(),
  namespace: z.string().optional(),
  description: z.string().optional(),
  nodes: z.array(taskNodeSchema).optional(),
  edges: z.array(edgeSchema).optional(),
  inputs: z.array(inputSchema).optional(),
})

// Generate YAML input
export const generateYamlSchema = z.object({
  workflowId: z.string(),
  namespace: z.string(),
  nodes: z.array(taskNodeSchema),
  edges: z.array(edgeSchema),
  inputs: z.array(inputSchema),
})

export type TaskNode = z.infer<typeof taskNodeSchema>
export type Edge = z.infer<typeof edgeSchema>
export type Input = z.infer<typeof inputSchema>
