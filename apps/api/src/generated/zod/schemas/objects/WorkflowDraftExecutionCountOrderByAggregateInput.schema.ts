import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  kestraExecId: SortOrderSchema.optional(),
  nodes: SortOrderSchema.optional(),
  edges: SortOrderSchema.optional(),
  inputs: SortOrderSchema.optional(),
  variables: SortOrderSchema.optional(),
  inputValues: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  taskRuns: SortOrderSchema.optional(),
  triggeredBy: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  endedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkflowDraftExecutionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCountOrderByAggregateInput>;
export const WorkflowDraftExecutionCountOrderByAggregateInputObjectZodSchema = makeSchema();
