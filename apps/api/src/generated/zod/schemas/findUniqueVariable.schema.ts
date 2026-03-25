import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './objects/VariableWhereUniqueInput.schema';

export const VariableFindUniqueSchema: z.ZodType<Prisma.VariableFindUniqueArgs> = z.object({   where: VariableWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VariableFindUniqueArgs>;

export const VariableFindUniqueZodSchema = z.object({   where: VariableWhereUniqueInputObjectSchema }).strict();