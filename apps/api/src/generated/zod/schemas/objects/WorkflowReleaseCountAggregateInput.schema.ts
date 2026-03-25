import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  workflowId: z.literal(true).optional(),
  version: z.literal(true).optional(),
  name: z.literal(true).optional(),
  nodes: z.literal(true).optional(),
  edges: z.literal(true).optional(),
  inputs: z.literal(true).optional(),
  variables: z.literal(true).optional(),
  yaml: z.literal(true).optional(),
  publishedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WorkflowReleaseCountAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseCountAggregateInputType>;
export const WorkflowReleaseCountAggregateInputObjectZodSchema = makeSchema();
