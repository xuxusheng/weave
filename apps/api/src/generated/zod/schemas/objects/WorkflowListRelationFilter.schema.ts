import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkflowWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkflowWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkflowWhereInputObjectSchema).optional()
}).strict();
export const WorkflowListRelationFilterObjectSchema: z.ZodType<Prisma.WorkflowListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowListRelationFilter>;
export const WorkflowListRelationFilterObjectZodSchema = makeSchema();
