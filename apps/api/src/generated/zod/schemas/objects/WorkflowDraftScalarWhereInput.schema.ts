import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workflowdraftscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowDraftScalarWhereInputObjectSchema), z.lazy(() => WorkflowDraftScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowDraftScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowDraftScalarWhereInputObjectSchema), z.lazy(() => WorkflowDraftScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nodes: z.lazy(() => JsonFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonFilterObjectSchema).optional(),
  message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowDraftScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkflowDraftScalarWhereInput> = workflowdraftscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowDraftScalarWhereInput>;
export const WorkflowDraftScalarWhereInputObjectZodSchema = workflowdraftscalarwhereinputSchema;
