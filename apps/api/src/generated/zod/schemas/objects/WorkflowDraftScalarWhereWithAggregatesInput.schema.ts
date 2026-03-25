import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workflowdraftscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowDraftScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowDraftScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowDraftScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowDraftScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowDraftScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nodes: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  message: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowDraftScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkflowDraftScalarWhereWithAggregatesInput> = workflowdraftscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkflowDraftScalarWhereWithAggregatesInput>;
export const WorkflowDraftScalarWhereWithAggregatesInputObjectZodSchema = workflowdraftscalarwherewithaggregatesinputSchema;
