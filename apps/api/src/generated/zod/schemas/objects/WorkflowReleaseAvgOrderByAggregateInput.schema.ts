import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  version: SortOrderSchema.optional()
}).strict();
export const WorkflowReleaseAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseAvgOrderByAggregateInput>;
export const WorkflowReleaseAvgOrderByAggregateInputObjectZodSchema = makeSchema();
