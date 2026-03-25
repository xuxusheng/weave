import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WorkflowScalarRelationFilterObjectSchema as WorkflowScalarRelationFilterObjectSchema } from './WorkflowScalarRelationFilter.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const workflowdraftexecutionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowDraftExecutionWhereInputObjectSchema), z.lazy(() => WorkflowDraftExecutionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowDraftExecutionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowDraftExecutionWhereInputObjectSchema), z.lazy(() => WorkflowDraftExecutionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  kestraExecId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nodes: z.lazy(() => JsonFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputValues: z.lazy(() => JsonFilterObjectSchema).optional(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskRuns: z.lazy(() => JsonFilterObjectSchema).optional(),
  triggeredBy: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  endedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  workflow: z.union([z.lazy(() => WorkflowScalarRelationFilterObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema)]).optional()
}).strict();
export const WorkflowDraftExecutionWhereInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionWhereInput> = workflowdraftexecutionwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowDraftExecutionWhereInput>;
export const WorkflowDraftExecutionWhereInputObjectZodSchema = workflowdraftexecutionwhereinputSchema;
