import * as z from 'zod';
export const WorkflowGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  flowId: z.string(),
  namespaceId: z.string(),
  description: z.string(),
  nodes: z.unknown(),
  edges: z.unknown(),
  inputs: z.unknown(),
  variables: z.unknown(),
  disabled: z.boolean(),
  publishedVersion: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    flowId: z.number(),
    namespaceId: z.number(),
    description: z.number(),
    nodes: z.number(),
    edges: z.number(),
    inputs: z.number(),
    variables: z.number(),
    disabled: z.number(),
    publishedVersion: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    namespace: z.number(),
    drafts: z.number(),
    releases: z.number(),
    executions: z.number(),
    prodExecutions: z.number(),
    triggers: z.number()
  }).optional(),
  _sum: z.object({
    publishedVersion: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    publishedVersion: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    flowId: z.string().nullable(),
    namespaceId: z.string().nullable(),
    description: z.string().nullable(),
    publishedVersion: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    flowId: z.string().nullable(),
    namespaceId: z.string().nullable(),
    description: z.string().nullable(),
    publishedVersion: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));