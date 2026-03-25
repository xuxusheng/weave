import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workflowexecutionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowExecutionScalarWhereInputObjectSchema), z.lazy(() => WorkflowExecutionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowExecutionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowExecutionScalarWhereInputObjectSchema), z.lazy(() => WorkflowExecutionScalarWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowExecutionScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionScalarWhereInput> = workflowexecutionscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowExecutionScalarWhereInput>;
export const WorkflowExecutionScalarWhereInputObjectZodSchema = workflowexecutionscalarwhereinputSchema;
