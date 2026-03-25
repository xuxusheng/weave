import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workflowscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowScalarWhereInputObjectSchema), z.lazy(() => WorkflowScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowScalarWhereInputObjectSchema), z.lazy(() => WorkflowScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  flowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  namespaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  nodes: z.lazy(() => JsonFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonFilterObjectSchema).optional(),
  disabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  publishedVersion: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkflowScalarWhereInput> = workflowscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowScalarWhereInput>;
export const WorkflowScalarWhereInputObjectZodSchema = workflowscalarwhereinputSchema;
