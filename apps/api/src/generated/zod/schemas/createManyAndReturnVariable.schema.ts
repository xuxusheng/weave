import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableCreateManyInputObjectSchema as VariableCreateManyInputObjectSchema } from './objects/VariableCreateManyInput.schema';

export const VariableCreateManyAndReturnSchema: z.ZodType<Prisma.VariableCreateManyAndReturnArgs> = z.object({  data: z.union([ VariableCreateManyInputObjectSchema, z.array(VariableCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VariableCreateManyAndReturnArgs>;

export const VariableCreateManyAndReturnZodSchema = z.object({  data: z.union([ VariableCreateManyInputObjectSchema, z.array(VariableCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();