import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './objects/SecretWhereUniqueInput.schema';

export const SecretFindUniqueSchema: z.ZodType<Prisma.SecretFindUniqueArgs> = z.object({   where: SecretWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SecretFindUniqueArgs>;

export const SecretFindUniqueZodSchema = z.object({   where: SecretWhereUniqueInputObjectSchema }).strict();