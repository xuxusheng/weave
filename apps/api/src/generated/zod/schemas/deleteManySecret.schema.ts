import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretWhereInputObjectSchema as SecretWhereInputObjectSchema } from './objects/SecretWhereInput.schema';

export const SecretDeleteManySchema: z.ZodType<Prisma.SecretDeleteManyArgs> = z.object({ where: SecretWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SecretDeleteManyArgs>;

export const SecretDeleteManyZodSchema = z.object({ where: SecretWhereInputObjectSchema.optional() }).strict();