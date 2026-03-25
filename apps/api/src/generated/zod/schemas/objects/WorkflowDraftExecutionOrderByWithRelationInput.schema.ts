import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkflowOrderByWithRelationInputObjectSchema as WorkflowOrderByWithRelationInputObjectSchema } from './WorkflowOrderByWithRelationInput.schema'

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
  workflow: z.lazy(() => WorkflowOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkflowDraftExecutionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionOrderByWithRelationInput>;
export const WorkflowDraftExecutionOrderByWithRelationInputObjectZodSchema = makeSchema();
