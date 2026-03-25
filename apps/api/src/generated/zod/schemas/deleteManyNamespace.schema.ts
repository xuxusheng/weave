import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './objects/NamespaceWhereInput.schema';

export const NamespaceDeleteManySchema: z.ZodType<Prisma.NamespaceDeleteManyArgs> = z.object({ where: NamespaceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NamespaceDeleteManyArgs>;

export const NamespaceDeleteManyZodSchema = z.object({ where: NamespaceWhereInputObjectSchema.optional() }).strict();