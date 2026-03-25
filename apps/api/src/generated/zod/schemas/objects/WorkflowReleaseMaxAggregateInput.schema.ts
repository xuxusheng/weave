import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  workflowId: z.literal(true).optional(),
  version: z.literal(true).optional(),
  name: z.literal(true).optional(),
  yaml: z.literal(true).optional(),
  publishedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const WorkflowReleaseMaxAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseMaxAggregateInputType>;
export const WorkflowReleaseMaxAggregateInputObjectZodSchema = makeSchema();
