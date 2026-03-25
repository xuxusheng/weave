import * as z from 'zod';
export const WorkflowReleaseUpsertResultSchema = z.object({
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
});