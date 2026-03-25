import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableCreateInputObjectSchema as VariableCreateInputObjectSchema } from './objects/VariableCreateInput.schema';
import { VariableUncheckedCreateInputObjectSchema as VariableUncheckedCreateInputObjectSchema } from './objects/VariableUncheckedCreateInput.schema';

export const VariableCreateOneSchema: z.ZodType<Prisma.VariableCreateArgs> = z.object({   data: z.union([VariableCreateInputObjectSchema, VariableUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VariableCreateArgs>;

export const VariableCreateOneZodSchema = z.object({   data: z.union([VariableCreateInputObjectSchema, VariableUncheckedCreateInputObjectSchema]) }).strict();