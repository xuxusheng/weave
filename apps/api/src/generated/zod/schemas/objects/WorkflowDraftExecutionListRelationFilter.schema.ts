import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftExecutionWhereInputObjectSchema as WorkflowDraftExecutionWhereInputObjectSchema } from './WorkflowDraftExecutionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkflowDraftExecutionWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkflowDraftExecutionWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkflowDraftExecutionWhereInputObjectSchema).optional()
}).strict();
export const WorkflowDraftExecutionListRelationFilterObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionListRelationFilter>;
export const WorkflowDraftExecutionListRelationFilterObjectZodSchema = makeSchema();
