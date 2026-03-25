import * as z from 'zod';
export const WorkflowDraftExecutionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  workflowId: z.string(),
  kestraExecId: z.string(),
  nodes: z.unknown(),
  edges: z.unknown(),
  inputs: z.unknown(),
  variables: z.unknown(),
  inputValues: z.unknown(),
  state: z.string(),
  taskRuns: z.unknown(),
  triggeredBy: z.string(),
  startedAt: z.date().optional(),
  endedAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  workflow: z.unknown()
}));