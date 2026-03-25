import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableCreateManyNamespaceInputObjectSchema as VariableCreateManyNamespaceInputObjectSchema } from './VariableCreateManyNamespaceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VariableCreateManyNamespaceInputObjectSchema), z.lazy(() => VariableCreateManyNamespaceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VariableCreateManyNamespaceInputEnvelopeObjectSchema: z.ZodType<Prisma.VariableCreateManyNamespaceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VariableCreateManyNamespaceInputEnvelope>;
export const VariableCreateManyNamespaceInputEnvelopeObjectZodSchema = makeSchema();
