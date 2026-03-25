import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowOrderByWithRelationInputObjectSchema as WorkflowOrderByWithRelationInputObjectSchema } from './objects/WorkflowOrderByWithRelationInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './objects/WorkflowWhereInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './objects/WorkflowWhereUniqueInput.schema';
import { WorkflowScalarFieldEnumSchema } from './enums/WorkflowScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WorkflowSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    flowId: z.boolean().optional(),
    namespaceId: z.boolean().optional(),
    description: z.boolean().optional(),
    nodes: z.boolean().optional(),
    edges: z.boolean().optional(),
    inputs: z.boolean().optional(),
    variables: z.boolean().optional(),
    disabled: z.boolean().optional(),
    publishedVersion: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    namespace: z.boolean().optional(),
    drafts: z.boolean().optional(),
    releases: z.boolean().optional(),
    executions: z.boolean().optional(),
    prodExecutions: z.boolean().optional(),
    triggers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkflowSelect>;

export const WorkflowFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    flowId: z.boolean().optional(),
    namespaceId: z.boolean().optional(),
    description: z.boolean().optional(),
    nodes: z.boolean().optional(),
    edges: z.boolean().optional(),
    inputs: z.boolean().optional(),
    variables: z.boolean().optional(),
    disabled: z.boolean().optional(),
    publishedVersion: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    namespace: z.boolean().optional(),
    drafts: z.boolean().optional(),
    releases: z.boolean().optional(),
    executions: z.boolean().optional(),
    prodExecutions: z.boolean().optional(),
    triggers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const WorkflowFindFirstOrThrowSchema: z.ZodType<Prisma.WorkflowFindFirstOrThrowArgs> = z.object({ select: WorkflowFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([WorkflowOrderByWithRelationInputObjectSchema, WorkflowOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowWhereInputObjectSchema.optional(), cursor: WorkflowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowScalarFieldEnumSchema, WorkflowScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowFindFirstOrThrowArgs>;

export const WorkflowFindFirstOrThrowZodSchema = z.object({ select: WorkflowFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([WorkflowOrderByWithRelationInputObjectSchema, WorkflowOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowWhereInputObjectSchema.optional(), cursor: WorkflowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowScalarFieldEnumSchema, WorkflowScalarFieldEnumSchema.array()]).optional() }).strict();