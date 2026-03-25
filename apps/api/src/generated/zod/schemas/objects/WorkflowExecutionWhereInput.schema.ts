import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WorkflowScalarRelationFilterObjectSchema as WorkflowScalarRelationFilterObjectSchema } from './WorkflowScalarRelationFilter.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema';
import { WorkflowReleaseScalarRelationFilterObjectSchema as WorkflowReleaseScalarRelationFilterObjectSchema } from './WorkflowReleaseScalarRelationFilter.schema';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './WorkflowReleaseWhereInput.schema'

const workflowexecutionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowExecutionWhereInputObjectSchema), z.lazy(() => WorkflowExecutionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowExecutionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowExecutionWhereInputObjectSchema), z.lazy(() => WorkflowExecutionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  releaseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  kestraExecId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inputValues: z.lazy(() => JsonFilterObjectSchema).optional(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskRuns: z.lazy(() => JsonFilterObjectSchema).optional(),
  triggeredBy: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  endedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  workflow: z.union([z.lazy(() => WorkflowScalarRelationFilterObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema)]).optional(),
  release: z.union([z.lazy(() => WorkflowReleaseScalarRelationFilterObjectSchema), z.lazy(() => WorkflowReleaseWhereInputObjectSchema)]).optional()
}).strict();
export const WorkflowExecutionWhereInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionWhereInput> = workflowexecutionwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowExecutionWhereInput>;
export const WorkflowExecutionWhereInputObjectZodSchema = workflowexecutionwhereinputSchema;
