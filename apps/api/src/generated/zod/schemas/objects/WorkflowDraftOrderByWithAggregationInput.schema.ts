import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkflowDraftCountOrderByAggregateInputObjectSchema as WorkflowDraftCountOrderByAggregateInputObjectSchema } from './WorkflowDraftCountOrderByAggregateInput.schema';
import { WorkflowDraftMaxOrderByAggregateInputObjectSchema as WorkflowDraftMaxOrderByAggregateInputObjectSchema } from './WorkflowDraftMaxOrderByAggregateInput.schema';
import { WorkflowDraftMinOrderByAggregateInputObjectSchema as WorkflowDraftMinOrderByAggregateInputObjectSchema } from './WorkflowDraftMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  nodes: SortOrderSchema.optional(),
  edges: SortOrderSchema.optional(),
  inputs: SortOrderSchema.optional(),
  variables: SortOrderSchema.optional(),
  message: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkflowDraftCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkflowDraftMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkflowDraftMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkflowDraftOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkflowDraftOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftOrderByWithAggregationInput>;
export const WorkflowDraftOrderByWithAggregationInputObjectZodSchema = makeSchema();
