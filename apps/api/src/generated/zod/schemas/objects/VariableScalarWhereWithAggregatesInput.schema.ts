import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const variablescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VariableScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VariableScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VariableScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VariableScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VariableScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  namespaceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VariableScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VariableScalarWhereWithAggregatesInput> = variablescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VariableScalarWhereWithAggregatesInput>;
export const VariableScalarWhereWithAggregatesInputObjectZodSchema = variablescalarwherewithaggregatesinputSchema;
