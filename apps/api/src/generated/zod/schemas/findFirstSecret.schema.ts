import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SecretOrderByWithRelationInputObjectSchema as SecretOrderByWithRelationInputObjectSchema } from './objects/SecretOrderByWithRelationInput.schema';
import { SecretWhereInputObjectSchema as SecretWhereInputObjectSchema } from './objects/SecretWhereInput.schema';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './objects/SecretWhereUniqueInput.schema';
import { SecretScalarFieldEnumSchema } from './enums/SecretScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SecretFindFirstSelectSchema: z.ZodType<Prisma.SecretSelect> = z.object({
    id: z.boolean().optional(),
    namespaceId: z.boolean().optional(),
    key: z.boolean().optional(),
    value: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    namespace: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SecretSelect>;

export const SecretFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    namespaceId: z.boolean().optional(),
    key: z.boolean().optional(),
    value: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    namespace: z.boolean().optional()
  }).strict();

export const SecretFindFirstSchema: z.ZodType<Prisma.SecretFindFirstArgs> = z.object({ select: SecretFindFirstSelectSchema.optional(),  orderBy: z.union([SecretOrderByWithRelationInputObjectSchema, SecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: SecretWhereInputObjectSchema.optional(), cursor: SecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SecretScalarFieldEnumSchema, SecretScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SecretFindFirstArgs>;

export const SecretFindFirstZodSchema = z.object({ select: SecretFindFirstSelectSchema.optional(),  orderBy: z.union([SecretOrderByWithRelationInputObjectSchema, SecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: SecretWhereInputObjectSchema.optional(), cursor: SecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SecretScalarFieldEnumSchema, SecretScalarFieldEnumSchema.array()]).optional() }).strict();