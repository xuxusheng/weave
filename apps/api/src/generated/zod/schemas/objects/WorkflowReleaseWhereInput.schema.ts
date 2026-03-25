import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WorkflowScalarRelationFilterObjectSchema as WorkflowScalarRelationFilterObjectSchema } from './WorkflowScalarRelationFilter.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema';
import { WorkflowExecutionListRelationFilterObjectSchema as WorkflowExecutionListRelationFilterObjectSchema } from './WorkflowExecutionListRelationFilter.schema'

const workflowreleasewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowReleaseWhereInputObjectSchema), z.lazy(() => WorkflowReleaseWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowReleaseWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowReleaseWhereInputObjectSchema), z.lazy(() => WorkflowReleaseWhereInputObjectSchema).array()]).optional(),
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
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  workflow: z.union([z.lazy(() => WorkflowScalarRelationFilterObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema)]).optional(),
  executions: z.lazy(() => WorkflowExecutionListRelationFilterObjectSchema).optional()
}).strict();
export const WorkflowReleaseWhereInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseWhereInput> = workflowreleasewhereinputSchema as unknown as z.ZodType<Prisma.WorkflowReleaseWhereInput>;
export const WorkflowReleaseWhereInputObjectZodSchema = workflowreleasewhereinputSchema;
