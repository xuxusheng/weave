import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowTriggerWhereInputObjectSchema as WorkflowTriggerWhereInputObjectSchema } from './WorkflowTriggerWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkflowTriggerWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkflowTriggerWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkflowTriggerWhereInputObjectSchema).optional()
}).strict();
export const WorkflowTriggerListRelationFilterObjectSchema: z.ZodType<Prisma.WorkflowTriggerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerListRelationFilter>;
export const WorkflowTriggerListRelationFilterObjectZodSchema = makeSchema();
