import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workflowreleasescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowReleaseScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowReleaseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowReleaseScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowReleaseScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowReleaseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  version: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nodes: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  yaml: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  publishedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowReleaseScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseScalarWhereWithAggregatesInput> = workflowreleasescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkflowReleaseScalarWhereWithAggregatesInput>;
export const WorkflowReleaseScalarWhereWithAggregatesInputObjectZodSchema = workflowreleasescalarwherewithaggregatesinputSchema;
