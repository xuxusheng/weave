import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretUpdateManyMutationInputObjectSchema as SecretUpdateManyMutationInputObjectSchema } from './objects/SecretUpdateManyMutationInput.schema';
import { SecretWhereInputObjectSchema as SecretWhereInputObjectSchema } from './objects/SecretWhereInput.schema';

export const SecretUpdateManySchema: z.ZodType<Prisma.SecretUpdateManyArgs> = z.object({ data: SecretUpdateManyMutationInputObjectSchema, where: SecretWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SecretUpdateManyArgs>;

export const SecretUpdateManyZodSchema = z.object({ data: SecretUpdateManyMutationInputObjectSchema, where: SecretWhereInputObjectSchema.optional() }).strict();