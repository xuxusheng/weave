import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceUpdateManyMutationInputObjectSchema as NamespaceUpdateManyMutationInputObjectSchema } from './objects/NamespaceUpdateManyMutationInput.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './objects/NamespaceWhereInput.schema';

export const NamespaceUpdateManySchema: z.ZodType<Prisma.NamespaceUpdateManyArgs> = z.object({ data: NamespaceUpdateManyMutationInputObjectSchema, where: NamespaceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NamespaceUpdateManyArgs>;

export const NamespaceUpdateManyZodSchema = z.object({ data: NamespaceUpdateManyMutationInputObjectSchema, where: NamespaceWhereInputObjectSchema.optional() }).strict();