import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  publishedVersion: SortOrderSchema.optional()
}).strict();
export const WorkflowAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowAvgOrderByAggregateInput>;
export const WorkflowAvgOrderByAggregateInputObjectZodSchema = makeSchema();
