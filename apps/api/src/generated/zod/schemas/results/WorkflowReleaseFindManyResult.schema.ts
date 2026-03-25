import * as z from 'zod';
export const WorkflowReleaseFindManyResultSchema = z.object({
  data: z.array(z.object({
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
  workflow: z.unknown(),
  executions: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});