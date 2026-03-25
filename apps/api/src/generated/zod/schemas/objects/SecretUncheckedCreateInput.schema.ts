import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  namespaceId: z.string(),
  key: z.string(),
  value: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const SecretUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SecretUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretUncheckedCreateInput>;
export const SecretUncheckedCreateInputObjectZodSchema = makeSchema();
