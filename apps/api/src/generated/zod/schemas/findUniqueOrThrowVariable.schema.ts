import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './objects/VariableWhereUniqueInput.schema';

export const VariableFindUniqueOrThrowSchema: z.ZodType<Prisma.VariableFindUniqueOrThrowArgs> = z.object({   where: VariableWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VariableFindUniqueOrThrowArgs>;

export const VariableFindUniqueOrThrowZodSchema = z.object({   where: VariableWhereUniqueInputObjectSchema }).strict();