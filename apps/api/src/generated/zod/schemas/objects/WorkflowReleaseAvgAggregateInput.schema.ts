import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  version: z.literal(true).optional()
}).strict();
export const WorkflowReleaseAvgAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseAvgAggregateInputType>;
export const WorkflowReleaseAvgAggregateInputObjectZodSchema = makeSchema();
