import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workflowscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  flowId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  namespaceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  nodes: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  edges: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  variables: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  disabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  publishedVersion: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkflowScalarWhereWithAggregatesInput> = workflowscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkflowScalarWhereWithAggregatesInput>;
export const WorkflowScalarWhereWithAggregatesInputObjectZodSchema = workflowscalarwherewithaggregatesinputSchema;
