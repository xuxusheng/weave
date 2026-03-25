import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const secretscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SecretScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SecretScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SecretScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SecretScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SecretScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  namespaceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SecretScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SecretScalarWhereWithAggregatesInput> = secretscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SecretScalarWhereWithAggregatesInput>;
export const SecretScalarWhereWithAggregatesInputObjectZodSchema = secretscalarwherewithaggregatesinputSchema;
