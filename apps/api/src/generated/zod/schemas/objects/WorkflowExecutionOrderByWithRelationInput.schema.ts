import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkflowOrderByWithRelationInputObjectSchema as WorkflowOrderByWithRelationInputObjectSchema } from './WorkflowOrderByWithRelationInput.schema';
import { WorkflowReleaseOrderByWithRelationInputObjectSchema as WorkflowReleaseOrderByWithRelationInputObjectSchema } from './WorkflowReleaseOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  releaseId: SortOrderSchema.optional(),
  kestraExecId: SortOrderSchema.optional(),
  inputValues: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  taskRuns: SortOrderSchema.optional(),
  triggeredBy: SortOrderSchema.optional(),
  startedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  endedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  workflow: z.lazy(() => WorkflowOrderByWithRelationInputObjectSchema).optional(),
  release: z.lazy(() => WorkflowReleaseOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkflowExecutionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionOrderByWithRelationInput>;
export const WorkflowExecutionOrderByWithRelationInputObjectZodSchema = makeSchema();
