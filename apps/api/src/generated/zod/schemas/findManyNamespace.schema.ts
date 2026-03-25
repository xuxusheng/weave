import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { NamespaceOrderByWithRelationInputObjectSchema as NamespaceOrderByWithRelationInputObjectSchema } from './objects/NamespaceOrderByWithRelationInput.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './objects/NamespaceWhereInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './objects/NamespaceWhereUniqueInput.schema';
import { NamespaceScalarFieldEnumSchema } from './enums/NamespaceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NamespaceFindManySelectSchema: z.ZodType<Prisma.NamespaceSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    kestraNamespace: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workflows: z.boolean().optional(),
    variables: z.boolean().optional(),
    secrets: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.NamespaceSelect>;

export const NamespaceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    kestraNamespace: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workflows: z.boolean().optional(),
    variables: z.boolean().optional(),
    secrets: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const NamespaceFindManySchema: z.ZodType<Prisma.NamespaceFindManyArgs> = z.object({ select: NamespaceFindManySelectSchema.optional(),  orderBy: z.union([NamespaceOrderByWithRelationInputObjectSchema, NamespaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: NamespaceWhereInputObjectSchema.optional(), cursor: NamespaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NamespaceScalarFieldEnumSchema, NamespaceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NamespaceFindManyArgs>;

export const NamespaceFindManyZodSchema = z.object({ select: NamespaceFindManySelectSchema.optional(),  orderBy: z.union([NamespaceOrderByWithRelationInputObjectSchema, NamespaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: NamespaceWhereInputObjectSchema.optional(), cursor: NamespaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NamespaceScalarFieldEnumSchema, NamespaceScalarFieldEnumSchema.array()]).optional() }).strict();