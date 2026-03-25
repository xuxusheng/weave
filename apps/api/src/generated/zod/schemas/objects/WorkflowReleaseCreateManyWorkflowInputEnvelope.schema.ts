import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseCreateManyWorkflowInputObjectSchema as WorkflowReleaseCreateManyWorkflowInputObjectSchema } from './WorkflowReleaseCreateManyWorkflowInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkflowReleaseCreateManyWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseCreateManyWorkflowInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkflowReleaseCreateManyWorkflowInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkflowReleaseCreateManyWorkflowInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateManyWorkflowInputEnvelope>;
export const WorkflowReleaseCreateManyWorkflowInputEnvelopeObjectZodSchema = makeSchema();
