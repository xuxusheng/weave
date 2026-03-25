import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workflowdraftexecutionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowDraftExecutionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowDraftExecutionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowDraftExecutionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowDraftExecutionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowDraftExecutionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  kestraExecId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nodes: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  inputValues: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  state: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  taskRuns: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  triggeredBy: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  endedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowDraftExecutionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionScalarWhereWithAggregatesInput> = workflowdraftexecutionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkflowDraftExecutionScalarWhereWithAggregatesInput>;
export const WorkflowDraftExecutionScalarWhereWithAggregatesInputObjectZodSchema = workflowdraftexecutionscalarwherewithaggregatesinputSchema;
