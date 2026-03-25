import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WorkflowReleaseOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseOrderByRelationAggregateInput>;
export const WorkflowReleaseOrderByRelationAggregateInputObjectZodSchema = makeSchema();
