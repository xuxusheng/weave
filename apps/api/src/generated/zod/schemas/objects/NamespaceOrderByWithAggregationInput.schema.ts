import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NamespaceCountOrderByAggregateInputObjectSchema as NamespaceCountOrderByAggregateInputObjectSchema } from './NamespaceCountOrderByAggregateInput.schema';
import { NamespaceMaxOrderByAggregateInputObjectSchema as NamespaceMaxOrderByAggregateInputObjectSchema } from './NamespaceMaxOrderByAggregateInput.schema';
import { NamespaceMinOrderByAggregateInputObjectSchema as NamespaceMinOrderByAggregateInputObjectSchema } from './NamespaceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  kestraNamespace: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => NamespaceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NamespaceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NamespaceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NamespaceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NamespaceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceOrderByWithAggregationInput>;
export const NamespaceOrderByWithAggregationInputObjectZodSchema = makeSchema();
