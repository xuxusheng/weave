import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  workflowId: z.literal(true).optional(),
  kestraExecId: z.literal(true).optional(),
  state: z.literal(true).optional(),
  triggeredBy: z.literal(true).optional(),
  startedAt: z.literal(true).optional(),
  endedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const WorkflowDraftExecutionMaxAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionMaxAggregateInputType>;
export const WorkflowDraftExecutionMaxAggregateInputObjectZodSchema = makeSchema();
