import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './WorkflowReleaseWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WorkflowReleaseWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WorkflowReleaseWhereInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseScalarRelationFilterObjectSchema: z.ZodType<Prisma.WorkflowReleaseScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseScalarRelationFilter>;
export const WorkflowReleaseScalarRelationFilterObjectZodSchema = makeSchema();
