import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableOrderByWithRelationInputObjectSchema as VariableOrderByWithRelationInputObjectSchema } from './objects/VariableOrderByWithRelationInput.schema';
import { VariableWhereInputObjectSchema as VariableWhereInputObjectSchema } from './objects/VariableWhereInput.schema';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './objects/VariableWhereUniqueInput.schema';
import { VariableScalarFieldEnumSchema } from './enums/VariableScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VariableFindManySelectSchema: z.ZodType<Prisma.VariableSelect> = z.object({
    id: z.boolean().optional(),
    namespaceId: z.boolean().optional(),
    key: z.boolean().optional(),
    value: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    namespace: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VariableSelect>;

export const VariableFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    namespaceId: z.boolean().optional(),
    key: z.boolean().optional(),
    value: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    namespace: z.boolean().optional()
  }).strict();

export const VariableFindManySchema: z.ZodType<Prisma.VariableFindManyArgs> = z.object({ select: VariableFindManySelectSchema.optional(),  orderBy: z.union([VariableOrderByWithRelationInputObjectSchema, VariableOrderByWithRelationInputObjectSchema.array()]).optional(), where: VariableWhereInputObjectSchema.optional(), cursor: VariableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VariableScalarFieldEnumSchema, VariableScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VariableFindManyArgs>;

export const VariableFindManyZodSchema = z.object({ select: VariableFindManySelectSchema.optional(),  orderBy: z.union([VariableOrderByWithRelationInputObjectSchema, VariableOrderByWithRelationInputObjectSchema.array()]).optional(), where: VariableWhereInputObjectSchema.optional(), cursor: VariableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VariableScalarFieldEnumSchema, VariableScalarFieldEnumSchema.array()]).optional() }).strict();