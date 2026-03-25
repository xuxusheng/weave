import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workflowId: SortOrderSchema.optional(),
  nodes: SortOrderSchema.optional(),
  edges: SortOrderSchema.optional(),
  inputs: SortOrderSchema.optional(),
  variables: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const WorkflowDraftCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftCountOrderByAggregateInput>;
export const WorkflowDraftCountOrderByAggregateInputObjectZodSchema = makeSchema();
