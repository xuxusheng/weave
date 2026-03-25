import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  kestraExecId: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  triggeredBy: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  endedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkflowDraftExecutionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionMaxOrderByAggregateInput>;
export const WorkflowDraftExecutionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
