import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateManyNamespaceInputObjectSchema as WorkflowCreateManyNamespaceInputObjectSchema } from './WorkflowCreateManyNamespaceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkflowCreateManyNamespaceInputObjectSchema), z.lazy(() => WorkflowCreateManyNamespaceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkflowCreateManyNamespaceInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkflowCreateManyNamespaceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateManyNamespaceInputEnvelope>;
export const WorkflowCreateManyNamespaceInputEnvelopeObjectZodSchema = makeSchema();
