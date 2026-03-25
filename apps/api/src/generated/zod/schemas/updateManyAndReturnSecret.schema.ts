import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretUpdateManyMutationInputObjectSchema as SecretUpdateManyMutationInputObjectSchema } from './objects/SecretUpdateManyMutationInput.schema';
import { SecretWhereInputObjectSchema as SecretWhereInputObjectSchema } from './objects/SecretWhereInput.schema';

export const SecretUpdateManyAndReturnSchema: z.ZodType<Prisma.SecretUpdateManyAndReturnArgs> = z.object({  data: SecretUpdateManyMutationInputObjectSchema, where: SecretWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SecretUpdateManyAndReturnArgs>;

export const SecretUpdateManyAndReturnZodSchema = z.object({  data: SecretUpdateManyMutationInputObjectSchema, where: SecretWhereInputObjectSchema.optional() }).strict();