import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WorkflowScalarRelationFilterObjectSchema as WorkflowScalarRelationFilterObjectSchema } from './WorkflowScalarRelationFilter.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const workflowdraftwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowDraftWhereInputObjectSchema), z.lazy(() => WorkflowDraftWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowDraftWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowDraftWhereInputObjectSchema), z.lazy(() => WorkflowDraftWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nodes: z.lazy(() => JsonFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonFilterObjectSchema).optional(),
  message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  workflow: z.union([z.lazy(() => WorkflowScalarRelationFilterObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema)]).optional()
}).strict();
export const WorkflowDraftWhereInputObjectSchema: z.ZodType<Prisma.WorkflowDraftWhereInput> = workflowdraftwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowDraftWhereInput>;
export const WorkflowDraftWhereInputObjectZodSchema = workflowdraftwhereinputSchema;
