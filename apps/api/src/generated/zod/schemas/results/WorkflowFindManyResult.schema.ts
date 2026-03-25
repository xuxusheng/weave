import * as z from 'zod';
export const WorkflowFindManyResultSchema = z.object({
  data: z.array(z.object({
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