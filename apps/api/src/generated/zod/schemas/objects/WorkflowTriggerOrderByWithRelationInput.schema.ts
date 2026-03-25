import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WorkflowOrderByWithRelationInputObjectSchema as WorkflowOrderByWithRelationInputObjectSchema } from './WorkflowOrderByWithRelationInput.schema'

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
  workflow: z.lazy(() => WorkflowOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkflowTriggerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerOrderByWithRelationInput>;
export const WorkflowTriggerOrderByWithRelationInputObjectZodSchema = makeSchema();
