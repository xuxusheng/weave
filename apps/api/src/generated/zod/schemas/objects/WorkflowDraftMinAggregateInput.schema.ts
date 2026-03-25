import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  workflowId: z.literal(true).optional(),
  message: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const WorkflowDraftMinAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftMinAggregateInputType>;
export const WorkflowDraftMinAggregateInputObjectZodSchema = makeSchema();
