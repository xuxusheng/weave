import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './objects/SecretWhereUniqueInput.schema';

export const SecretFindUniqueOrThrowSchema: z.ZodType<Prisma.SecretFindUniqueOrThrowArgs> = z.object({   where: SecretWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SecretFindUniqueOrThrowArgs>;

export const SecretFindUniqueOrThrowZodSchema = z.object({   where: SecretWhereUniqueInputObjectSchema }).strict();