import * as z from 'zod';
export const WorkflowDraftFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  workflowId: z.string(),
  nodes: z.unknown(),
  edges: z.unknown(),
  inputs: z.unknown(),
  variables: z.unknown(),
  message: z.string().optional(),
  createdAt: z.date(),
  workflow: z.unknown()
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