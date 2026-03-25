import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  publishedVersion: z.literal(true).optional()
}).strict();
export const WorkflowAvgAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowAvgAggregateInputType>;
export const WorkflowAvgAggregateInputObjectZodSchema = makeSchema();
