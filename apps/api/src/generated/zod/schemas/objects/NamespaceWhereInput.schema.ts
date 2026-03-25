import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WorkflowListRelationFilterObjectSchema as WorkflowListRelationFilterObjectSchema } from './WorkflowListRelationFilter.schema';
import { VariableListRelationFilterObjectSchema as VariableListRelationFilterObjectSchema } from './VariableListRelationFilter.schema';
import { SecretListRelationFilterObjectSchema as SecretListRelationFilterObjectSchema } from './SecretListRelationFilter.schema'

const namespacewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => NamespaceWhereInputObjectSchema), z.lazy(() => NamespaceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NamespaceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NamespaceWhereInputObjectSchema), z.lazy(() => NamespaceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  kestraNamespace: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  workflows: z.lazy(() => WorkflowListRelationFilterObjectSchema).optional(),
  variables: z.lazy(() => VariableListRelationFilterObjectSchema).optional(),
  secrets: z.lazy(() => SecretListRelationFilterObjectSchema).optional()
}).strict();
export const NamespaceWhereInputObjectSchema: z.ZodType<Prisma.NamespaceWhereInput> = namespacewhereinputSchema as unknown as z.ZodType<Prisma.NamespaceWhereInput>;
export const NamespaceWhereInputObjectZodSchema = namespacewhereinputSchema;
