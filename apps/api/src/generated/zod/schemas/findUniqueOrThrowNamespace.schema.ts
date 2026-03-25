import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './objects/NamespaceWhereUniqueInput.schema';

export const NamespaceFindUniqueOrThrowSchema: z.ZodType<Prisma.NamespaceFindUniqueOrThrowArgs> = z.object({   where: NamespaceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NamespaceFindUniqueOrThrowArgs>;

export const NamespaceFindUniqueOrThrowZodSchema = z.object({   where: NamespaceWhereUniqueInputObjectSchema }).strict();