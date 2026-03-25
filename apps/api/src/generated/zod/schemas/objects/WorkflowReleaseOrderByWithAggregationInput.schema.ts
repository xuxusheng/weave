import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WorkflowReleaseCountOrderByAggregateInputObjectSchema as WorkflowReleaseCountOrderByAggregateInputObjectSchema } from './WorkflowReleaseCountOrderByAggregateInput.schema';
import { WorkflowReleaseAvgOrderByAggregateInputObjectSchema as WorkflowReleaseAvgOrderByAggregateInputObjectSchema } from './WorkflowReleaseAvgOrderByAggregateInput.schema';
import { WorkflowReleaseMaxOrderByAggregateInputObjectSchema as WorkflowReleaseMaxOrderByAggregateInputObjectSchema } from './WorkflowReleaseMaxOrderByAggregateInput.schema';
import { WorkflowReleaseMinOrderByAggregateInputObjectSchema as WorkflowReleaseMinOrderByAggregateInputObjectSchema } from './WorkflowReleaseMinOrderByAggregateInput.schema';
import { WorkflowReleaseSumOrderByAggregateInputObjectSchema as WorkflowReleaseSumOrderByAggregateInputObjectSchema } from './WorkflowReleaseSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  nodes: SortOrderSchema.optional(),
  edges: SortOrderSchema.optional(),
  inputs: SortOrderSchema.optional(),
  variables: SortOrderSchema.optional(),
  yaml: SortOrderSchema.optional(),
  publishedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkflowReleaseCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WorkflowReleaseAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkflowReleaseMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkflowReleaseMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WorkflowReleaseSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseOrderByWithAggregationInput>;
export const WorkflowReleaseOrderByWithAggregationInputObjectZodSchema = makeSchema();
