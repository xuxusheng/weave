import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkflowCountOrderByAggregateInputObjectSchema as WorkflowCountOrderByAggregateInputObjectSchema } from './WorkflowCountOrderByAggregateInput.schema';
import { WorkflowAvgOrderByAggregateInputObjectSchema as WorkflowAvgOrderByAggregateInputObjectSchema } from './WorkflowAvgOrderByAggregateInput.schema';
import { WorkflowMaxOrderByAggregateInputObjectSchema as WorkflowMaxOrderByAggregateInputObjectSchema } from './WorkflowMaxOrderByAggregateInput.schema';
import { WorkflowMinOrderByAggregateInputObjectSchema as WorkflowMinOrderByAggregateInputObjectSchema } from './WorkflowMinOrderByAggregateInput.schema';
import { WorkflowSumOrderByAggregateInputObjectSchema as WorkflowSumOrderByAggregateInputObjectSchema } from './WorkflowSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  flowId: SortOrderSchema.optional(),
  namespaceId: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nodes: SortOrderSchema.optional(),
  edges: SortOrderSchema.optional(),
  inputs: SortOrderSchema.optional(),
  variables: SortOrderSchema.optional(),
  disabled: SortOrderSchema.optional(),
  publishedVersion: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkflowCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WorkflowAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkflowMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkflowMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WorkflowSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkflowOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkflowOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowOrderByWithAggregationInput>;
export const WorkflowOrderByWithAggregationInputObjectZodSchema = makeSchema();
