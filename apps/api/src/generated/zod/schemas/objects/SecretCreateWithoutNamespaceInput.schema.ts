import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SecretCreateWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.SecretCreateWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretCreateWithoutNamespaceInput>;
export const SecretCreateWithoutNamespaceInputObjectZodSchema = makeSchema();
