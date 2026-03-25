import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const namespacescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => NamespaceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NamespaceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NamespaceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NamespaceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NamespaceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  kestraNamespace: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const NamespaceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NamespaceScalarWhereWithAggregatesInput> = namespacescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.NamespaceScalarWhereWithAggregatesInput>;
export const NamespaceScalarWhereWithAggregatesInputObjectZodSchema = namespacescalarwherewithaggregatesinputSchema;
