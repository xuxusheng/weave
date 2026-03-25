import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableUpdateManyMutationInputObjectSchema as VariableUpdateManyMutationInputObjectSchema } from './objects/VariableUpdateManyMutationInput.schema';
import { VariableWhereInputObjectSchema as VariableWhereInputObjectSchema } from './objects/VariableWhereInput.schema';

export const VariableUpdateManySchema: z.ZodType<Prisma.VariableUpdateManyArgs> = z.object({ data: VariableUpdateManyMutationInputObjectSchema, where: VariableWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VariableUpdateManyArgs>;

export const VariableUpdateManyZodSchema = z.object({ data: VariableUpdateManyMutationInputObjectSchema, where: VariableWhereInputObjectSchema.optional() }).strict();