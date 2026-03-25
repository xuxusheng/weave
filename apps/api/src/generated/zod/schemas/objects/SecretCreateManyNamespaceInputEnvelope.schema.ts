import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretCreateManyNamespaceInputObjectSchema as SecretCreateManyNamespaceInputObjectSchema } from './SecretCreateManyNamespaceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SecretCreateManyNamespaceInputObjectSchema), z.lazy(() => SecretCreateManyNamespaceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SecretCreateManyNamespaceInputEnvelopeObjectSchema: z.ZodType<Prisma.SecretCreateManyNamespaceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SecretCreateManyNamespaceInputEnvelope>;
export const SecretCreateManyNamespaceInputEnvelopeObjectZodSchema = makeSchema();
