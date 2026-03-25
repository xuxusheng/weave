import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WorkflowTriggerCountOrderByAggregateInputObjectSchema as WorkflowTriggerCountOrderByAggregateInputObjectSchema } from './WorkflowTriggerCountOrderByAggregateInput.schema';
import { WorkflowTriggerMaxOrderByAggregateInputObjectSchema as WorkflowTriggerMaxOrderByAggregateInputObjectSchema } from './WorkflowTriggerMaxOrderByAggregateInput.schema';
import { WorkflowTriggerMinOrderByAggregateInputObjectSchema as WorkflowTriggerMinOrderByAggregateInputObjectSchema } from './WorkflowTriggerMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  config: SortOrderSchema.optional(),
  inputs: SortOrderSchema.optional(),
  kestraFlowId: SortOrderSchema.optional(),
  disabled: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkflowTriggerCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkflowTriggerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkflowTriggerMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkflowTriggerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerOrderByWithAggregationInput>;
export const WorkflowTriggerOrderByWithAggregationInputObjectZodSchema = makeSchema();
