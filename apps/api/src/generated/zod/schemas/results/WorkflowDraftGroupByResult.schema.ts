import * as z from 'zod';
export const WorkflowDraftGroupByResultSchema = z.array(z.object({
  id: z.string(),
  workflowId: z.string(),
  nodes: z.unknown(),
  edges: z.unknown(),
  inputs: z.unknown(),
  variables: z.unknown(),
  message: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    workflowId: z.number(),
    nodes: z.number(),
    edges: z.number(),
    inputs: z.number(),
    variables: z.number(),
    message: z.number(),
    createdAt: z.number(),
    workflow: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    workflowId: z.string().nullable(),
    message: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    workflowId: z.string().nullable(),
    message: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));