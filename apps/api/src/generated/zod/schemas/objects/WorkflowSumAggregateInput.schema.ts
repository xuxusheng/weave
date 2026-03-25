import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  publishedVersion: z.literal(true).optional()
}).strict();
export const WorkflowSumAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowSumAggregateInputType>;
export const WorkflowSumAggregateInputObjectZodSchema = makeSchema();
