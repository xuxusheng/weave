import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretWhereInputObjectSchema as SecretWhereInputObjectSchema } from './objects/SecretWhereInput.schema';
import { SecretOrderByWithAggregationInputObjectSchema as SecretOrderByWithAggregationInputObjectSchema } from './objects/SecretOrderByWithAggregationInput.schema';
import { SecretScalarWhereWithAggregatesInputObjectSchema as SecretScalarWhereWithAggregatesInputObjectSchema } from './objects/SecretScalarWhereWithAggregatesInput.schema';
import { SecretScalarFieldEnumSchema } from './enums/SecretScalarFieldEnum.schema';
import { SecretCountAggregateInputObjectSchema as SecretCountAggregateInputObjectSchema } from './objects/SecretCountAggregateInput.schema';
import { SecretMinAggregateInputObjectSchema as SecretMinAggregateInputObjectSchema } from './objects/SecretMinAggregateInput.schema';
import { SecretMaxAggregateInputObjectSchema as SecretMaxAggregateInputObjectSchema } from './objects/SecretMaxAggregateInput.schema';

export const SecretGroupBySchema: z.ZodType<Prisma.SecretGroupByArgs> = z.object({ where: SecretWhereInputObjectSchema.optional(), orderBy: z.union([SecretOrderByWithAggregationInputObjectSchema, SecretOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SecretScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SecretScalarFieldEnumSchema), _count: z.union([ z.literal(true), SecretCountAggregateInputObjectSchema ]).optional(), _min: SecretMinAggregateInputObjectSchema.optional(), _max: SecretMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SecretGroupByArgs>;

export const SecretGroupByZodSchema = z.object({ where: SecretWhereInputObjectSchema.optional(), orderBy: z.union([SecretOrderByWithAggregationInputObjectSchema, SecretOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SecretScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SecretScalarFieldEnumSchema), _count: z.union([ z.literal(true), SecretCountAggregateInputObjectSchema ]).optional(), _min: SecretMinAggregateInputObjectSchema.optional(), _max: SecretMaxAggregateInputObjectSchema.optional() }).strict();