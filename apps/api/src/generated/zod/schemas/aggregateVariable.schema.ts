import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VariableOrderByWithRelationInputObjectSchema as VariableOrderByWithRelationInputObjectSchema } from './objects/VariableOrderByWithRelationInput.schema';
import { VariableWhereInputObjectSchema as VariableWhereInputObjectSchema } from './objects/VariableWhereInput.schema';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './objects/VariableWhereUniqueInput.schema';
import { VariableCountAggregateInputObjectSchema as VariableCountAggregateInputObjectSchema } from './objects/VariableCountAggregateInput.schema';
import { VariableMinAggregateInputObjectSchema as VariableMinAggregateInputObjectSchema } from './objects/VariableMinAggregateInput.schema';
import { VariableMaxAggregateInputObjectSchema as VariableMaxAggregateInputObjectSchema } from './objects/VariableMaxAggregateInput.schema';

export const VariableAggregateSchema: z.ZodType<Prisma.VariableAggregateArgs> = z.object({ orderBy: z.union([VariableOrderByWithRelationInputObjectSchema, VariableOrderByWithRelationInputObjectSchema.array()]).optional(), where: VariableWhereInputObjectSchema.optional(), cursor: VariableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VariableCountAggregateInputObjectSchema ]).optional(), _min: VariableMinAggregateInputObjectSchema.optional(), _max: VariableMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VariableAggregateArgs>;

export const VariableAggregateZodSchema = z.object({ orderBy: z.union([VariableOrderByWithRelationInputObjectSchema, VariableOrderByWithRelationInputObjectSchema.array()]).optional(), where: VariableWhereInputObjectSchema.optional(), cursor: VariableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VariableCountAggregateInputObjectSchema ]).optional(), _min: VariableMinAggregateInputObjectSchema.optional(), _max: VariableMaxAggregateInputObjectSchema.optional() }).strict();