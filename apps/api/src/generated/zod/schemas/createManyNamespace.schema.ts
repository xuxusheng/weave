import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceCreateManyInputObjectSchema as NamespaceCreateManyInputObjectSchema } from './objects/NamespaceCreateManyInput.schema';

export const NamespaceCreateManySchema: z.ZodType<Prisma.NamespaceCreateManyArgs> = z.object({ data: z.union([ NamespaceCreateManyInputObjectSchema, z.array(NamespaceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NamespaceCreateManyArgs>;

export const NamespaceCreateManyZodSchema = z.object({ data: z.union([ NamespaceCreateManyInputObjectSchema, z.array(NamespaceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();