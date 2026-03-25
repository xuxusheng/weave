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
export const VariableUncheckedCreateWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.VariableUncheckedCreateWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableUncheckedCreateWithoutNamespaceInput>;
export const VariableUncheckedCreateWithoutNamespaceInputObjectZodSchema = makeSchema();
