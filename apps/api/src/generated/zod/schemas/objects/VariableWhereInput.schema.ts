import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { NamespaceScalarRelationFilterObjectSchema as NamespaceScalarRelationFilterObjectSchema } from './NamespaceScalarRelationFilter.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema'

const variablewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VariableWhereInputObjectSchema), z.lazy(() => VariableWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VariableWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VariableWhereInputObjectSchema), z.lazy(() => VariableWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  namespaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  namespace: z.union([z.lazy(() => NamespaceScalarRelationFilterObjectSchema), z.lazy(() => NamespaceWhereInputObjectSchema)]).optional()
}).strict();
export const VariableWhereInputObjectSchema: z.ZodType<Prisma.VariableWhereInput> = variablewhereinputSchema as unknown as z.ZodType<Prisma.VariableWhereInput>;
export const VariableWhereInputObjectZodSchema = variablewhereinputSchema;
