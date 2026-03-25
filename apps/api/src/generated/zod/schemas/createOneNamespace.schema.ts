import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceCreateInputObjectSchema as NamespaceCreateInputObjectSchema } from './objects/NamespaceCreateInput.schema';
import { NamespaceUncheckedCreateInputObjectSchema as NamespaceUncheckedCreateInputObjectSchema } from './objects/NamespaceUncheckedCreateInput.schema';

export const NamespaceCreateOneSchema: z.ZodType<Prisma.NamespaceCreateArgs> = z.object({   data: z.union([NamespaceCreateInputObjectSchema, NamespaceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.NamespaceCreateArgs>;

export const NamespaceCreateOneZodSchema = z.object({   data: z.union([NamespaceCreateInputObjectSchema, NamespaceUncheckedCreateInputObjectSchema]) }).strict();