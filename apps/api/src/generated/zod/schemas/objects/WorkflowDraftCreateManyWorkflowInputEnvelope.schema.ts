import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftCreateManyWorkflowInputObjectSchema as WorkflowDraftCreateManyWorkflowInputObjectSchema } from './WorkflowDraftCreateManyWorkflowInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkflowDraftCreateManyWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftCreateManyWorkflowInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkflowDraftCreateManyWorkflowInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkflowDraftCreateManyWorkflowInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftCreateManyWorkflowInputEnvelope>;
export const WorkflowDraftCreateManyWorkflowInputEnvelopeObjectZodSchema = makeSchema();
