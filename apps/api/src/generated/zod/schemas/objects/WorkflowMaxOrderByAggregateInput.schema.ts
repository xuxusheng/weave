import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  flowId: SortOrderSchema.optional(),
  namespaceId: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  disabled: SortOrderSchema.optional(),
  publishedVersion: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkflowMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowMaxOrderByAggregateInput>;
export const WorkflowMaxOrderByAggregateInputObjectZodSchema = makeSchema();
