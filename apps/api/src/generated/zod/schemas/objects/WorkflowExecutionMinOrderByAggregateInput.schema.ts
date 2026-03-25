import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  releaseId: SortOrderSchema.optional(),
  kestraExecId: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  triggeredBy: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  endedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkflowExecutionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionMinOrderByAggregateInput>;
export const WorkflowExecutionMinOrderByAggregateInputObjectZodSchema = makeSchema();
