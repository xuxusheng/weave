import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './objects/SecretWhereUniqueInput.schema';

export const SecretDeleteOneSchema: z.ZodType<Prisma.SecretDeleteArgs> = z.object({   where: SecretWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SecretDeleteArgs>;

export const SecretDeleteOneZodSchema = z.object({   where: SecretWhereUniqueInputObjectSchema }).strict();