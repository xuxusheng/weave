import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workflowtriggerscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowTriggerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowTriggerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowTriggerScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowTriggerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkflowTriggerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  config: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  kestraFlowId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  disabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowTriggerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerScalarWhereWithAggregatesInput> = workflowtriggerscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkflowTriggerScalarWhereWithAggregatesInput>;
export const WorkflowTriggerScalarWhereWithAggregatesInputObjectZodSchema = workflowtriggerscalarwherewithaggregatesinputSchema;
