import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  yaml: SortOrderSchema.optional(),
  publishedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const WorkflowReleaseMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseMaxOrderByAggregateInput>;
export const WorkflowReleaseMaxOrderByAggregateInputObjectZodSchema = makeSchema();
