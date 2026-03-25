import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretOrderByWithRelationInputObjectSchema as SecretOrderByWithRelationInputObjectSchema } from './objects/SecretOrderByWithRelationInput.schema';
import { SecretWhereInputObjectSchema as SecretWhereInputObjectSchema } from './objects/SecretWhereInput.schema';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './objects/SecretWhereUniqueInput.schema';
import { SecretCountAggregateInputObjectSchema as SecretCountAggregateInputObjectSchema } from './objects/SecretCountAggregateInput.schema';
import { SecretMinAggregateInputObjectSchema as SecretMinAggregateInputObjectSchema } from './objects/SecretMinAggregateInput.schema';
import { SecretMaxAggregateInputObjectSchema as SecretMaxAggregateInputObjectSchema } from './objects/SecretMaxAggregateInput.schema';

export const SecretAggregateSchema: z.ZodType<Prisma.SecretAggregateArgs> = z.object({ orderBy: z.union([SecretOrderByWithRelationInputObjectSchema, SecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: SecretWhereInputObjectSchema.optional(), cursor: SecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SecretCountAggregateInputObjectSchema ]).optional(), _min: SecretMinAggregateInputObjectSchema.optional(), _max: SecretMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SecretAggregateArgs>;

export const SecretAggregateZodSchema = z.object({ orderBy: z.union([SecretOrderByWithRelationInputObjectSchema, SecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: SecretWhereInputObjectSchema.optional(), cursor: SecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SecretCountAggregateInputObjectSchema ]).optional(), _min: SecretMinAggregateInputObjectSchema.optional(), _max: SecretMaxAggregateInputObjectSchema.optional() }).strict();