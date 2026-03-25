import * as z from 'zod';
export const WorkflowExecutionDeleteResultSchema = z.nullable(z.object({
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
}));