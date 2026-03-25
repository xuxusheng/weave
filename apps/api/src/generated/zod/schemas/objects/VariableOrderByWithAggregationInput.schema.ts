import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VariableCountOrderByAggregateInputObjectSchema as VariableCountOrderByAggregateInputObjectSchema } from './VariableCountOrderByAggregateInput.schema';
import { VariableMaxOrderByAggregateInputObjectSchema as VariableMaxOrderByAggregateInputObjectSchema } from './VariableMaxOrderByAggregateInput.schema';
import { VariableMinOrderByAggregateInputObjectSchema as VariableMinOrderByAggregateInputObjectSchema } from './VariableMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  namespaceId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => VariableCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VariableMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VariableMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VariableOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VariableOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableOrderByWithAggregationInput>;
export const VariableOrderByWithAggregationInputObjectZodSchema = makeSchema();
