import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  kestraNamespace: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const NamespaceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NamespaceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceMinOrderByAggregateInput>;
export const NamespaceMinOrderByAggregateInputObjectZodSchema = makeSchema();
