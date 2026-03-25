import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NamespaceOrderByWithRelationInputObjectSchema as NamespaceOrderByWithRelationInputObjectSchema } from './NamespaceOrderByWithRelationInput.schema';
import { WorkflowDraftOrderByRelationAggregateInputObjectSchema as WorkflowDraftOrderByRelationAggregateInputObjectSchema } from './WorkflowDraftOrderByRelationAggregateInput.schema';
import { WorkflowReleaseOrderByRelationAggregateInputObjectSchema as WorkflowReleaseOrderByRelationAggregateInputObjectSchema } from './WorkflowReleaseOrderByRelationAggregateInput.schema';
import { WorkflowDraftExecutionOrderByRelationAggregateInputObjectSchema as WorkflowDraftExecutionOrderByRelationAggregateInputObjectSchema } from './WorkflowDraftExecutionOrderByRelationAggregateInput.schema';
import { WorkflowExecutionOrderByRelationAggregateInputObjectSchema as WorkflowExecutionOrderByRelationAggregateInputObjectSchema } from './WorkflowExecutionOrderByRelationAggregateInput.schema';
import { WorkflowTriggerOrderByRelationAggregateInputObjectSchema as WorkflowTriggerOrderByRelationAggregateInputObjectSchema } from './WorkflowTriggerOrderByRelationAggregateInput.schema'

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
  namespace: z.lazy(() => NamespaceOrderByWithRelationInputObjectSchema).optional(),
  drafts: z.lazy(() => WorkflowDraftOrderByRelationAggregateInputObjectSchema).optional(),
  releases: z.lazy(() => WorkflowReleaseOrderByRelationAggregateInputObjectSchema).optional(),
  executions: z.lazy(() => WorkflowDraftExecutionOrderByRelationAggregateInputObjectSchema).optional(),
  prodExecutions: z.lazy(() => WorkflowExecutionOrderByRelationAggregateInputObjectSchema).optional(),
  triggers: z.lazy(() => WorkflowTriggerOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WorkflowOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkflowOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowOrderByWithRelationInput>;
export const WorkflowOrderByWithRelationInputObjectZodSchema = makeSchema();
