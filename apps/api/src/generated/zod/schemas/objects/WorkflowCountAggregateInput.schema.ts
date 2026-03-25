import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  flowId: z.literal(true).optional(),
  namespaceId: z.literal(true).optional(),
  description: z.literal(true).optional(),
  nodes: z.literal(true).optional(),
  edges: z.literal(true).optional(),
  inputs: z.literal(true).optional(),
  variables: z.literal(true).optional(),
  disabled: z.literal(true).optional(),
  publishedVersion: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WorkflowCountAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCountAggregateInputType>;
export const WorkflowCountAggregateInputObjectZodSchema = makeSchema();
