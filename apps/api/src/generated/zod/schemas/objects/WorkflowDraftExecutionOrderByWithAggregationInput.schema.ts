import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkflowDraftExecutionCountOrderByAggregateInputObjectSchema as WorkflowDraftExecutionCountOrderByAggregateInputObjectSchema } from './WorkflowDraftExecutionCountOrderByAggregateInput.schema';
import { WorkflowDraftExecutionMaxOrderByAggregateInputObjectSchema as WorkflowDraftExecutionMaxOrderByAggregateInputObjectSchema } from './WorkflowDraftExecutionMaxOrderByAggregateInput.schema';
import { WorkflowDraftExecutionMinOrderByAggregateInputObjectSchema as WorkflowDraftExecutionMinOrderByAggregateInputObjectSchema } from './WorkflowDraftExecutionMinOrderByAggregateInput.schema'

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
  startedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkflowDraftExecutionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkflowDraftExecutionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkflowDraftExecutionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkflowDraftExecutionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionOrderByWithAggregationInput>;
export const WorkflowDraftExecutionOrderByWithAggregationInputObjectZodSchema = makeSchema();
