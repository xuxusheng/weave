import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretUpdateInputObjectSchema as SecretUpdateInputObjectSchema } from './objects/SecretUpdateInput.schema';
import { SecretUncheckedUpdateInputObjectSchema as SecretUncheckedUpdateInputObjectSchema } from './objects/SecretUncheckedUpdateInput.schema';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './objects/SecretWhereUniqueInput.schema';

export const SecretUpdateOneSchema: z.ZodType<Prisma.SecretUpdateArgs> = z.object({   data: z.union([SecretUpdateInputObjectSchema, SecretUncheckedUpdateInputObjectSchema]), where: SecretWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SecretUpdateArgs>;

export const SecretUpdateOneZodSchema = z.object({   data: z.union([SecretUpdateInputObjectSchema, SecretUncheckedUpdateInputObjectSchema]), where: SecretWhereUniqueInputObjectSchema }).strict();