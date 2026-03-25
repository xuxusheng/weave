import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workflowtriggerscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowTriggerScalarWhereInputObjectSchema), z.lazy(() => WorkflowTriggerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowTriggerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowTriggerScalarWhereInputObjectSchema), z.lazy(() => WorkflowTriggerScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  config: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonFilterObjectSchema).optional(),
  kestraFlowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  disabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowTriggerScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerScalarWhereInput> = workflowtriggerscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowTriggerScalarWhereInput>;
export const WorkflowTriggerScalarWhereInputObjectZodSchema = workflowtriggerscalarwhereinputSchema;
