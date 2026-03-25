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
export const NamespaceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NamespaceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceMaxOrderByAggregateInput>;
export const NamespaceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
