import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretOrderByWithRelationInputObjectSchema as SecretOrderByWithRelationInputObjectSchema } from './objects/SecretOrderByWithRelationInput.schema';
import { SecretWhereInputObjectSchema as SecretWhereInputObjectSchema } from './objects/SecretWhereInput.schema';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './objects/SecretWhereUniqueInput.schema';
import { SecretCountAggregateInputObjectSchema as SecretCountAggregateInputObjectSchema } from './objects/SecretCountAggregateInput.schema';

export const SecretCountSchema: z.ZodType<Prisma.SecretCountArgs> = z.object({ orderBy: z.union([SecretOrderByWithRelationInputObjectSchema, SecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: SecretWhereInputObjectSchema.optional(), cursor: SecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SecretCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SecretCountArgs>;

export const SecretCountZodSchema = z.object({ orderBy: z.union([SecretOrderByWithRelationInputObjectSchema, SecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: SecretWhereInputObjectSchema.optional(), cursor: SecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SecretCountAggregateInputObjectSchema ]).optional() }).strict();