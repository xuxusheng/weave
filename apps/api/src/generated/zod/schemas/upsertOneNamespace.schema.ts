import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './objects/NamespaceWhereUniqueInput.schema';
import { NamespaceCreateInputObjectSchema as NamespaceCreateInputObjectSchema } from './objects/NamespaceCreateInput.schema';
import { NamespaceUncheckedCreateInputObjectSchema as NamespaceUncheckedCreateInputObjectSchema } from './objects/NamespaceUncheckedCreateInput.schema';
import { NamespaceUpdateInputObjectSchema as NamespaceUpdateInputObjectSchema } from './objects/NamespaceUpdateInput.schema';
import { NamespaceUncheckedUpdateInputObjectSchema as NamespaceUncheckedUpdateInputObjectSchema } from './objects/NamespaceUncheckedUpdateInput.schema';

export const NamespaceUpsertOneSchema: z.ZodType<Prisma.NamespaceUpsertArgs> = z.object({   where: NamespaceWhereUniqueInputObjectSchema, create: z.union([ NamespaceCreateInputObjectSchema, NamespaceUncheckedCreateInputObjectSchema ]), update: z.union([ NamespaceUpdateInputObjectSchema, NamespaceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.NamespaceUpsertArgs>;

export const NamespaceUpsertOneZodSchema = z.object({   where: NamespaceWhereUniqueInputObjectSchema, create: z.union([ NamespaceCreateInputObjectSchema, NamespaceUncheckedCreateInputObjectSchema ]), update: z.union([ NamespaceUpdateInputObjectSchema, NamespaceUncheckedUpdateInputObjectSchema ]) }).strict();