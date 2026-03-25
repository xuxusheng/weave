import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  createdAt: SortOrderSchema.optional()
}).strict();
export const WorkflowReleaseCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseCountOrderByAggregateInput>;
export const WorkflowReleaseCountOrderByAggregateInputObjectZodSchema = makeSchema();
