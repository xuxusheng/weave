import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftWhereInputObjectSchema as WorkflowDraftWhereInputObjectSchema } from './WorkflowDraftWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkflowDraftWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkflowDraftWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkflowDraftWhereInputObjectSchema).optional()
}).strict();
export const WorkflowDraftListRelationFilterObjectSchema: z.ZodType<Prisma.WorkflowDraftListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftListRelationFilter>;
export const WorkflowDraftListRelationFilterObjectZodSchema = makeSchema();
