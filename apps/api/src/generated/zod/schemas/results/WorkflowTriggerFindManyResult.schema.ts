import * as z from 'zod';
export const WorkflowTriggerFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  workflowId: z.string(),
  name: z.string(),
  type: z.string(),
  config: z.unknown(),
  inputs: z.unknown(),
  kestraFlowId: z.string(),
  disabled: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
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