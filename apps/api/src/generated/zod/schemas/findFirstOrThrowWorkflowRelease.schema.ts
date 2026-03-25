import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseOrderByWithRelationInputObjectSchema as WorkflowReleaseOrderByWithRelationInputObjectSchema } from './objects/WorkflowReleaseOrderByWithRelationInput.schema';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './objects/WorkflowReleaseWhereInput.schema';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './objects/WorkflowReleaseWhereUniqueInput.schema';
import { WorkflowReleaseScalarFieldEnumSchema } from './enums/WorkflowReleaseScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowReleaseFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WorkflowReleaseSelect> = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    version: z.boolean().optional(),
    name: z.boolean().optional(),
    nodes: z.boolean().optional(),
    edges: z.boolean().optional(),
    inputs: z.boolean().optional(),
    variables: z.boolean().optional(),
    yaml: z.boolean().optional(),
    publishedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    workflow: z.boolean().optional(),
    executions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseSelect>;

export const WorkflowReleaseFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    version: z.boolean().optional(),
    name: z.boolean().optional(),
    nodes: z.boolean().optional(),
    edges: z.boolean().optional(),
    inputs: z.boolean().optional(),
    variables: z.boolean().optional(),
    yaml: z.boolean().optional(),
    publishedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    workflow: z.boolean().optional(),
    executions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const WorkflowReleaseFindFirstOrThrowSchema: z.ZodType<Prisma.WorkflowReleaseFindFirstOrThrowArgs> = z.object({ select: WorkflowReleaseFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([WorkflowReleaseOrderByWithRelationInputObjectSchema, WorkflowReleaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowReleaseWhereInputObjectSchema.optional(), cursor: WorkflowReleaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowReleaseScalarFieldEnumSchema, WorkflowReleaseScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseFindFirstOrThrowArgs>;

export const WorkflowReleaseFindFirstOrThrowZodSchema = z.object({ select: WorkflowReleaseFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([WorkflowReleaseOrderByWithRelationInputObjectSchema, WorkflowReleaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowReleaseWhereInputObjectSchema.optional(), cursor: WorkflowReleaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowReleaseScalarFieldEnumSchema, WorkflowReleaseScalarFieldEnumSchema.array()]).optional() }).strict();