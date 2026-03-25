import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './objects/NamespaceWhereUniqueInput.schema';

export const NamespaceFindUniqueSchema: z.ZodType<Prisma.NamespaceFindUniqueArgs> = z.object({   where: NamespaceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NamespaceFindUniqueArgs>;

export const NamespaceFindUniqueZodSchema = z.object({   where: NamespaceWhereUniqueInputObjectSchema }).strict();