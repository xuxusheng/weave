import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './WorkflowReleaseWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkflowReleaseWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkflowReleaseWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkflowReleaseWhereInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseListRelationFilterObjectSchema: z.ZodType<Prisma.WorkflowReleaseListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseListRelationFilter>;
export const WorkflowReleaseListRelationFilterObjectZodSchema = makeSchema();
