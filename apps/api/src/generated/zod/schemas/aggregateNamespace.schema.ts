import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceOrderByWithRelationInputObjectSchema as NamespaceOrderByWithRelationInputObjectSchema } from './objects/NamespaceOrderByWithRelationInput.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './objects/NamespaceWhereInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './objects/NamespaceWhereUniqueInput.schema';
import { NamespaceCountAggregateInputObjectSchema as NamespaceCountAggregateInputObjectSchema } from './objects/NamespaceCountAggregateInput.schema';
import { NamespaceMinAggregateInputObjectSchema as NamespaceMinAggregateInputObjectSchema } from './objects/NamespaceMinAggregateInput.schema';
import { NamespaceMaxAggregateInputObjectSchema as NamespaceMaxAggregateInputObjectSchema } from './objects/NamespaceMaxAggregateInput.schema';

export const NamespaceAggregateSchema: z.ZodType<Prisma.NamespaceAggregateArgs> = z.object({ orderBy: z.union([NamespaceOrderByWithRelationInputObjectSchema, NamespaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: NamespaceWhereInputObjectSchema.optional(), cursor: NamespaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), NamespaceCountAggregateInputObjectSchema ]).optional(), _min: NamespaceMinAggregateInputObjectSchema.optional(), _max: NamespaceMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NamespaceAggregateArgs>;

export const NamespaceAggregateZodSchema = z.object({ orderBy: z.union([NamespaceOrderByWithRelationInputObjectSchema, NamespaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: NamespaceWhereInputObjectSchema.optional(), cursor: NamespaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), NamespaceCountAggregateInputObjectSchema ]).optional(), _min: NamespaceMinAggregateInputObjectSchema.optional(), _max: NamespaceMaxAggregateInputObjectSchema.optional() }).strict();