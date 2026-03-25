import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  version: SortOrderSchema.optional()
}).strict();
export const WorkflowReleaseSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseSumOrderByAggregateInput>;
export const WorkflowReleaseSumOrderByAggregateInputObjectZodSchema = makeSchema();
