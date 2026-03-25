import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const WorkflowDraftMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftMinOrderByAggregateInput>;
export const WorkflowDraftMinOrderByAggregateInputObjectZodSchema = makeSchema();
