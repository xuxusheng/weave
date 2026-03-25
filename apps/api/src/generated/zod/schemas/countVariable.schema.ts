import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableOrderByWithRelationInputObjectSchema as VariableOrderByWithRelationInputObjectSchema } from './objects/VariableOrderByWithRelationInput.schema';
import { VariableWhereInputObjectSchema as VariableWhereInputObjectSchema } from './objects/VariableWhereInput.schema';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './objects/VariableWhereUniqueInput.schema';
import { VariableCountAggregateInputObjectSchema as VariableCountAggregateInputObjectSchema } from './objects/VariableCountAggregateInput.schema';

export const VariableCountSchema: z.ZodType<Prisma.VariableCountArgs> = z.object({ orderBy: z.union([VariableOrderByWithRelationInputObjectSchema, VariableOrderByWithRelationInputObjectSchema.array()]).optional(), where: VariableWhereInputObjectSchema.optional(), cursor: VariableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VariableCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VariableCountArgs>;

export const VariableCountZodSchema = z.object({ orderBy: z.union([VariableOrderByWithRelationInputObjectSchema, VariableOrderByWithRelationInputObjectSchema.array()]).optional(), where: VariableWhereInputObjectSchema.optional(), cursor: VariableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VariableCountAggregateInputObjectSchema ]).optional() }).strict();