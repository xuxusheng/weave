import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SecretCountOrderByAggregateInputObjectSchema as SecretCountOrderByAggregateInputObjectSchema } from './SecretCountOrderByAggregateInput.schema';
import { SecretMaxOrderByAggregateInputObjectSchema as SecretMaxOrderByAggregateInputObjectSchema } from './SecretMaxOrderByAggregateInput.schema';
import { SecretMinOrderByAggregateInputObjectSchema as SecretMinOrderByAggregateInputObjectSchema } from './SecretMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  namespaceId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SecretCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SecretMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SecretMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SecretOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SecretOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretOrderByWithAggregationInput>;
export const SecretOrderByWithAggregationInputObjectZodSchema = makeSchema();
