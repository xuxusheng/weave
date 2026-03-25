import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowTriggerCreateManyWorkflowInputObjectSchema as WorkflowTriggerCreateManyWorkflowInputObjectSchema } from './WorkflowTriggerCreateManyWorkflowInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkflowTriggerCreateManyWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerCreateManyWorkflowInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkflowTriggerCreateManyWorkflowInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkflowTriggerCreateManyWorkflowInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerCreateManyWorkflowInputEnvelope>;
export const WorkflowTriggerCreateManyWorkflowInputEnvelopeObjectZodSchema = makeSchema();
