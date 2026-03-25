import * as z from 'zod';
export const WorkflowFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  flowId: z.string(),
  namespaceId: z.string(),
  description: z.string().optional(),
  nodes: z.unknown(),
  edges: z.unknown(),
  inputs: z.unknown(),
  variables: z.unknown(),
  disabled: z.boolean(),
  publishedVersion: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  namespace: z.unknown(),
  drafts: z.array(z.unknown()),
  releases: z.array(z.unknown()),
  executions: z.array(z.unknown()),
  prodExecutions: z.array(z.unknown()),
  triggers: z.array(z.unknown())
}));