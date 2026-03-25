import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftExecutionCreateManyWorkflowInputObjectSchema as WorkflowDraftExecutionCreateManyWorkflowInputObjectSchema } from './WorkflowDraftExecutionCreateManyWorkflowInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkflowDraftExecutionCreateManyWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionCreateManyWorkflowInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkflowDraftExecutionCreateManyWorkflowInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionCreateManyWorkflowInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCreateManyWorkflowInputEnvelope>;
export const WorkflowDraftExecutionCreateManyWorkflowInputEnvelopeObjectZodSchema = makeSchema();
