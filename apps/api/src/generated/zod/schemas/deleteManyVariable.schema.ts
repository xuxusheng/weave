import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableWhereInputObjectSchema as VariableWhereInputObjectSchema } from './objects/VariableWhereInput.schema';

export const VariableDeleteManySchema: z.ZodType<Prisma.VariableDeleteManyArgs> = z.object({ where: VariableWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VariableDeleteManyArgs>;

export const VariableDeleteManyZodSchema = z.object({ where: VariableWhereInputObjectSchema.optional() }).strict();