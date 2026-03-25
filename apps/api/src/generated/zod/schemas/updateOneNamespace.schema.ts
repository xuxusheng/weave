import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceUpdateInputObjectSchema as NamespaceUpdateInputObjectSchema } from './objects/NamespaceUpdateInput.schema';
import { NamespaceUncheckedUpdateInputObjectSchema as NamespaceUncheckedUpdateInputObjectSchema } from './objects/NamespaceUncheckedUpdateInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './objects/NamespaceWhereUniqueInput.schema';

export const NamespaceUpdateOneSchema: z.ZodType<Prisma.NamespaceUpdateArgs> = z.object({   data: z.union([NamespaceUpdateInputObjectSchema, NamespaceUncheckedUpdateInputObjectSchema]), where: NamespaceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NamespaceUpdateArgs>;

export const NamespaceUpdateOneZodSchema = z.object({   data: z.union([NamespaceUpdateInputObjectSchema, NamespaceUncheckedUpdateInputObjectSchema]), where: NamespaceWhereUniqueInputObjectSchema }).strict();