import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WorkflowOrderByWithRelationInputObjectSchema as WorkflowOrderByWithRelationInputObjectSchema } from './WorkflowOrderByWithRelationInput.schema';
import { WorkflowExecutionOrderByRelationAggregateInputObjectSchema as WorkflowExecutionOrderByRelationAggregateInputObjectSchema } from './WorkflowExecutionOrderByRelationAggregateInput.schema'

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
  workflow: z.lazy(() => WorkflowOrderByWithRelationInputObjectSchema).optional(),
  executions: z.lazy(() => WorkflowExecutionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseOrderByWithRelationInput>;
export const WorkflowReleaseOrderByWithRelationInputObjectZodSchema = makeSchema();
