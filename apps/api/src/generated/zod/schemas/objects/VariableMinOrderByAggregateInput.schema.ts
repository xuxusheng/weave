import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  namespaceId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VariableMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VariableMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableMinOrderByAggregateInput>;
export const VariableMinOrderByAggregateInputObjectZodSchema = makeSchema();
