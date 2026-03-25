import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WorkflowDraftOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftOrderByRelationAggregateInput>;
export const WorkflowDraftOrderByRelationAggregateInputObjectZodSchema = makeSchema();
