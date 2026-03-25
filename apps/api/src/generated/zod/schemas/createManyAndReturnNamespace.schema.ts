import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceCreateManyInputObjectSchema as NamespaceCreateManyInputObjectSchema } from './objects/NamespaceCreateManyInput.schema';

export const NamespaceCreateManyAndReturnSchema: z.ZodType<Prisma.NamespaceCreateManyAndReturnArgs> = z.object({  data: z.union([ NamespaceCreateManyInputObjectSchema, z.array(NamespaceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NamespaceCreateManyAndReturnArgs>;

export const NamespaceCreateManyAndReturnZodSchema = z.object({  data: z.union([ NamespaceCreateManyInputObjectSchema, z.array(NamespaceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();