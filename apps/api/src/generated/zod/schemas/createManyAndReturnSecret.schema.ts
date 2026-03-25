import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretCreateManyInputObjectSchema as SecretCreateManyInputObjectSchema } from './objects/SecretCreateManyInput.schema';

export const SecretCreateManyAndReturnSchema: z.ZodType<Prisma.SecretCreateManyAndReturnArgs> = z.object({  data: z.union([ SecretCreateManyInputObjectSchema, z.array(SecretCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SecretCreateManyAndReturnArgs>;

export const SecretCreateManyAndReturnZodSchema = z.object({  data: z.union([ SecretCreateManyInputObjectSchema, z.array(SecretCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();