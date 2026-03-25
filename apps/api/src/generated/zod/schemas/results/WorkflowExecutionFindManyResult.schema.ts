import * as z from 'zod';
export const WorkflowExecutionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  workflowId: z.string(),
  releaseId: z.string(),
  kestraExecId: z.string(),
  inputValues: z.unknown(),
  state: z.string(),
  taskRuns: z.unknown(),
  triggeredBy: z.string(),
  startedAt: z.date().optional(),
  endedAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  workflow: z.unknown(),
  release: z.unknown()
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