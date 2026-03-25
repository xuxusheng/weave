import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './objects/SecretWhereUniqueInput.schema';
import { SecretCreateInputObjectSchema as SecretCreateInputObjectSchema } from './objects/SecretCreateInput.schema';
import { SecretUncheckedCreateInputObjectSchema as SecretUncheckedCreateInputObjectSchema } from './objects/SecretUncheckedCreateInput.schema';
import { SecretUpdateInputObjectSchema as SecretUpdateInputObjectSchema } from './objects/SecretUpdateInput.schema';
import { SecretUncheckedUpdateInputObjectSchema as SecretUncheckedUpdateInputObjectSchema } from './objects/SecretUncheckedUpdateInput.schema';

export const SecretUpsertOneSchema: z.ZodType<Prisma.SecretUpsertArgs> = z.object({   where: SecretWhereUniqueInputObjectSchema, create: z.union([ SecretCreateInputObjectSchema, SecretUncheckedCreateInputObjectSchema ]), update: z.union([ SecretUpdateInputObjectSchema, SecretUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SecretUpsertArgs>;

export const SecretUpsertOneZodSchema = z.object({   where: SecretWhereUniqueInputObjectSchema, create: z.union([ SecretCreateInputObjectSchema, SecretUncheckedCreateInputObjectSchema ]), update: z.union([ SecretUpdateInputObjectSchema, SecretUncheckedUpdateInputObjectSchema ]) }).strict();