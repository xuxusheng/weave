import * as z from 'zod';
export const WorkflowDraftDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  workflowId: z.string(),
  nodes: z.unknown(),
  edges: z.unknown(),
  inputs: z.unknown(),
  variables: z.unknown(),
  message: z.string().optional(),
  createdAt: z.date(),
  workflow: z.unknown()
}));