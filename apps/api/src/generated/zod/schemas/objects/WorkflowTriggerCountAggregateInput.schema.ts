import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  workflowId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  config: z.literal(true).optional(),
  inputs: z.literal(true).optional(),
  kestraFlowId: z.literal(true).optional(),
  disabled: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WorkflowTriggerCountAggregateInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerCountAggregateInputType>;
export const WorkflowTriggerCountAggregateInputObjectZodSchema = makeSchema();
