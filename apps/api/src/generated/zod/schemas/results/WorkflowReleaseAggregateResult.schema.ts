import * as z from 'zod';
export const WorkflowReleaseAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    workflowId: z.number(),
    version: z.number(),
    name: z.number(),
    nodes: z.number(),
    edges: z.number(),
    inputs: z.number(),
    variables: z.number(),
    yaml: z.number(),
    publishedAt: z.number(),
    createdAt: z.number(),
    workflow: z.number(),
    executions: z.number()
  }).optional(),
  _sum: z.object({
    version: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    version: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    workflowId: z.string().nullable(),
    version: z.number().int().nullable(),
    name: z.string().nullable(),
    yaml: z.string().nullable(),
    publishedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    workflowId: z.string().nullable(),
    version: z.number().int().nullable(),
    name: z.string().nullable(),
    yaml: z.string().nullable(),
    publishedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});