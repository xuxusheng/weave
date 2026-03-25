import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  version: z.literal(true).optional()
}).strict();
export const WorkflowReleaseSumAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseSumAggregateInputType>;
export const WorkflowReleaseSumAggregateInputObjectZodSchema = makeSchema();
