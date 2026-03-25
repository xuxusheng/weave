import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  publishedVersion: SortOrderSchema.optional()
}).strict();
export const WorkflowSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowSumOrderByAggregateInput>;
export const WorkflowSumOrderByAggregateInputObjectZodSchema = makeSchema();
