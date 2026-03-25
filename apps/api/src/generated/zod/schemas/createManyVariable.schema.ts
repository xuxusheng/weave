import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableCreateManyInputObjectSchema as VariableCreateManyInputObjectSchema } from './objects/VariableCreateManyInput.schema';

export const VariableCreateManySchema: z.ZodType<Prisma.VariableCreateManyArgs> = z.object({ data: z.union([ VariableCreateManyInputObjectSchema, z.array(VariableCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VariableCreateManyArgs>;

export const VariableCreateManyZodSchema = z.object({ data: z.union([ VariableCreateManyInputObjectSchema, z.array(VariableCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();