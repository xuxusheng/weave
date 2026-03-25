import * as z from 'zod';
export const WorkflowReleaseGroupByResultSchema = z.array(z.object({
  id: z.string(),
  workflowId: z.string(),
  version: z.number().int(),
  name: z.string(),
  nodes: z.unknown(),
  edges: z.unknown(),
  inputs: z.unknown(),
  variables: z.unknown(),
  yaml: z.string(),
  publishedAt: z.date(),
  createdAt: z.date(),
  _count: z.object({
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
  }).nullable().optional()
}));