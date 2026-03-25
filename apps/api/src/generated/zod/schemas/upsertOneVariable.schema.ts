import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './objects/VariableWhereUniqueInput.schema';
import { VariableCreateInputObjectSchema as VariableCreateInputObjectSchema } from './objects/VariableCreateInput.schema';
import { VariableUncheckedCreateInputObjectSchema as VariableUncheckedCreateInputObjectSchema } from './objects/VariableUncheckedCreateInput.schema';
import { VariableUpdateInputObjectSchema as VariableUpdateInputObjectSchema } from './objects/VariableUpdateInput.schema';
import { VariableUncheckedUpdateInputObjectSchema as VariableUncheckedUpdateInputObjectSchema } from './objects/VariableUncheckedUpdateInput.schema';

export const VariableUpsertOneSchema: z.ZodType<Prisma.VariableUpsertArgs> = z.object({   where: VariableWhereUniqueInputObjectSchema, create: z.union([ VariableCreateInputObjectSchema, VariableUncheckedCreateInputObjectSchema ]), update: z.union([ VariableUpdateInputObjectSchema, VariableUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VariableUpsertArgs>;

export const VariableUpsertOneZodSchema = z.object({   where: VariableWhereUniqueInputObjectSchema, create: z.union([ VariableCreateInputObjectSchema, VariableUncheckedCreateInputObjectSchema ]), update: z.union([ VariableUpdateInputObjectSchema, VariableUncheckedUpdateInputObjectSchema ]) }).strict();