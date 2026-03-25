import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './objects/VariableWhereUniqueInput.schema';

export const VariableDeleteOneSchema: z.ZodType<Prisma.VariableDeleteArgs> = z.object({   where: VariableWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VariableDeleteArgs>;

export const VariableDeleteOneZodSchema = z.object({   where: VariableWhereUniqueInputObjectSchema }).strict();