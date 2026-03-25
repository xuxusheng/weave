import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  workflowId: z.literal(true).optional(),
  kestraExecId: z.literal(true).optional(),
  nodes: z.literal(true).optional(),
  edges: z.literal(true).optional(),
  inputs: z.literal(true).optional(),
  variables: z.literal(true).optional(),
  inputValues: z.literal(true).optional(),
  state: z.literal(true).optional(),
  taskRuns: z.literal(true).optional(),
  triggeredBy: z.literal(true).optional(),
  startedAt: z.literal(true).optional(),
  endedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WorkflowDraftExecutionCountAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCountAggregateInputType>;
export const WorkflowDraftExecutionCountAggregateInputObjectZodSchema = makeSchema();
