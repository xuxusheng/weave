import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './objects/NamespaceWhereUniqueInput.schema';

export const NamespaceDeleteOneSchema: z.ZodType<Prisma.NamespaceDeleteArgs> = z.object({   where: NamespaceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NamespaceDeleteArgs>;

export const NamespaceDeleteOneZodSchema = z.object({   where: NamespaceWhereUniqueInputObjectSchema }).strict();