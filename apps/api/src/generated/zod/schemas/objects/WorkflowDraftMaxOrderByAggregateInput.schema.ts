import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const WorkflowDraftMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftMaxOrderByAggregateInput>;
export const WorkflowDraftMaxOrderByAggregateInputObjectZodSchema = makeSchema();
