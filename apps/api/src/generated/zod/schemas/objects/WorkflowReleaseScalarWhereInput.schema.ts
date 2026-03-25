import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workflowreleasescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowReleaseScalarWhereInputObjectSchema), z.lazy(() => WorkflowReleaseScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowReleaseScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowReleaseScalarWhereInputObjectSchema), z.lazy(() => WorkflowReleaseScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  version: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nodes: z.lazy(() => JsonFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonFilterObjectSchema).optional(),
  yaml: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  publishedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowReleaseScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseScalarWhereInput> = workflowreleasescalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowReleaseScalarWhereInput>;
export const WorkflowReleaseScalarWhereInputObjectZodSchema = workflowreleasescalarwhereinputSchema;
