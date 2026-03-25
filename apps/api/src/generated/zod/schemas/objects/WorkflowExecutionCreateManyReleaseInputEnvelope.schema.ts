import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowExecutionCreateManyReleaseInputObjectSchema as WorkflowExecutionCreateManyReleaseInputObjectSchema } from './WorkflowExecutionCreateManyReleaseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkflowExecutionCreateManyReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionCreateManyReleaseInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkflowExecutionCreateManyReleaseInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkflowExecutionCreateManyReleaseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionCreateManyReleaseInputEnvelope>;
export const WorkflowExecutionCreateManyReleaseInputEnvelopeObjectZodSchema = makeSchema();
