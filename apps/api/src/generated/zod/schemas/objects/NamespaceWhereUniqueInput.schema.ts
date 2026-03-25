import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  kestraNamespace: z.string().optional()
}).strict();
export const NamespaceWhereUniqueInputObjectSchema: z.ZodType<Prisma.NamespaceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceWhereUniqueInput>;
export const NamespaceWhereUniqueInputObjectZodSchema = makeSchema();
