import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceUpdateManyMutationInputObjectSchema as NamespaceUpdateManyMutationInputObjectSchema } from './objects/NamespaceUpdateManyMutationInput.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './objects/NamespaceWhereInput.schema';

export const NamespaceUpdateManyAndReturnSchema: z.ZodType<Prisma.NamespaceUpdateManyAndReturnArgs> = z.object({  data: NamespaceUpdateManyMutationInputObjectSchema, where: NamespaceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NamespaceUpdateManyAndReturnArgs>;

export const NamespaceUpdateManyAndReturnZodSchema = z.object({  data: NamespaceUpdateManyMutationInputObjectSchema, where: NamespaceWhereInputObjectSchema.optional() }).strict();