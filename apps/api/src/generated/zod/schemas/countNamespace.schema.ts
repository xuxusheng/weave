import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceOrderByWithRelationInputObjectSchema as NamespaceOrderByWithRelationInputObjectSchema } from './objects/NamespaceOrderByWithRelationInput.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './objects/NamespaceWhereInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './objects/NamespaceWhereUniqueInput.schema';
import { NamespaceCountAggregateInputObjectSchema as NamespaceCountAggregateInputObjectSchema } from './objects/NamespaceCountAggregateInput.schema';

export const NamespaceCountSchema: z.ZodType<Prisma.NamespaceCountArgs> = z.object({ orderBy: z.union([NamespaceOrderByWithRelationInputObjectSchema, NamespaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: NamespaceWhereInputObjectSchema.optional(), cursor: NamespaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NamespaceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.NamespaceCountArgs>;

export const NamespaceCountZodSchema = z.object({ orderBy: z.union([NamespaceOrderByWithRelationInputObjectSchema, NamespaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: NamespaceWhereInputObjectSchema.optional(), cursor: NamespaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NamespaceCountAggregateInputObjectSchema ]).optional() }).strict();