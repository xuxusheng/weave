import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretCreateInputObjectSchema as SecretCreateInputObjectSchema } from './objects/SecretCreateInput.schema';
import { SecretUncheckedCreateInputObjectSchema as SecretUncheckedCreateInputObjectSchema } from './objects/SecretUncheckedCreateInput.schema';

export const SecretCreateOneSchema: z.ZodType<Prisma.SecretCreateArgs> = z.object({   data: z.union([SecretCreateInputObjectSchema, SecretUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SecretCreateArgs>;

export const SecretCreateOneZodSchema = z.object({   data: z.union([SecretCreateInputObjectSchema, SecretUncheckedCreateInputObjectSchema]) }).strict();