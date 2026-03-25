import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const variablescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VariableScalarWhereInputObjectSchema), z.lazy(() => VariableScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VariableScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VariableScalarWhereInputObjectSchema), z.lazy(() => VariableScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  namespaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VariableScalarWhereInputObjectSchema: z.ZodType<Prisma.VariableScalarWhereInput> = variablescalarwhereinputSchema as unknown as z.ZodType<Prisma.VariableScalarWhereInput>;
export const VariableScalarWhereInputObjectZodSchema = variablescalarwhereinputSchema;
