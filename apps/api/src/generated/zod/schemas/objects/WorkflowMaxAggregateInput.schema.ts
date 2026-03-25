import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  flowId: z.literal(true).optional(),
  namespaceId: z.literal(true).optional(),
  description: z.literal(true).optional(),
  disabled: z.literal(true).optional(),
  publishedVersion: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const WorkflowMaxAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowMaxAggregateInputType>;
export const WorkflowMaxAggregateInputObjectZodSchema = makeSchema();
