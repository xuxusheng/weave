import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretCreateManyInputObjectSchema as SecretCreateManyInputObjectSchema } from './objects/SecretCreateManyInput.schema';

export const SecretCreateManySchema: z.ZodType<Prisma.SecretCreateManyArgs> = z.object({ data: z.union([ SecretCreateManyInputObjectSchema, z.array(SecretCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SecretCreateManyArgs>;

export const SecretCreateManyZodSchema = z.object({ data: z.union([ SecretCreateManyInputObjectSchema, z.array(SecretCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();