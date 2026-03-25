import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WorkflowScalarRelationFilterObjectSchema as WorkflowScalarRelationFilterObjectSchema } from './WorkflowScalarRelationFilter.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const workflowtriggerwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowTriggerWhereInputObjectSchema), z.lazy(() => WorkflowTriggerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowTriggerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowTriggerWhereInputObjectSchema), z.lazy(() => WorkflowTriggerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workflowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  config: z.lazy(() => JsonFilterObjectSchema).optional(),
  inputs: z.lazy(() => JsonFilterObjectSchema).optional(),
  kestraFlowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  disabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  workflow: z.union([z.lazy(() => WorkflowScalarRelationFilterObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema)]).optional()
}).strict();
export const WorkflowTriggerWhereInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerWhereInput> = workflowtriggerwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowTriggerWhereInput>;
export const WorkflowTriggerWhereInputObjectZodSchema = workflowtriggerwhereinputSchema;
