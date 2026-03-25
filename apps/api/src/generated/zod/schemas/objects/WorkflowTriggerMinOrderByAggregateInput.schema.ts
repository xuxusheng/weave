import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  kestraFlowId: SortOrderSchema.optional(),
  disabled: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkflowTriggerMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerMinOrderByAggregateInput>;
export const WorkflowTriggerMinOrderByAggregateInputObjectZodSchema = makeSchema();
