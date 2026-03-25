import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableUpdateInputObjectSchema as VariableUpdateInputObjectSchema } from './objects/VariableUpdateInput.schema';
import { VariableUncheckedUpdateInputObjectSchema as VariableUncheckedUpdateInputObjectSchema } from './objects/VariableUncheckedUpdateInput.schema';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './objects/VariableWhereUniqueInput.schema';

export const VariableUpdateOneSchema: z.ZodType<Prisma.VariableUpdateArgs> = z.object({   data: z.union([VariableUpdateInputObjectSchema, VariableUncheckedUpdateInputObjectSchema]), where: VariableWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VariableUpdateArgs>;

export const VariableUpdateOneZodSchema = z.object({   data: z.union([VariableUpdateInputObjectSchema, VariableUncheckedUpdateInputObjectSchema]), where: VariableWhereUniqueInputObjectSchema }).strict();