import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WorkflowDraftExecutionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionOrderByRelationAggregateInput>;
export const WorkflowDraftExecutionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
