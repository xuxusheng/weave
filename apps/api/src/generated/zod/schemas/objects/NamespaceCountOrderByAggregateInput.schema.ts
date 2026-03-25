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
export const NamespaceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NamespaceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCountOrderByAggregateInput>;
export const NamespaceCountOrderByAggregateInputObjectZodSchema = makeSchema();
