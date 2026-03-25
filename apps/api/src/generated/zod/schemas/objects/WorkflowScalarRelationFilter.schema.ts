import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WorkflowWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WorkflowWhereInputObjectSchema).optional()
}).strict();
export const WorkflowScalarRelationFilterObjectSchema: z.ZodType<Prisma.WorkflowScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowScalarRelationFilter>;
export const WorkflowScalarRelationFilterObjectZodSchema = makeSchema();
