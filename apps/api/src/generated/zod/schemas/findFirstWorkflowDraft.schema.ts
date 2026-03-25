import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftOrderByWithRelationInputObjectSchema as WorkflowDraftOrderByWithRelationInputObjectSchema } from './objects/WorkflowDraftOrderByWithRelationInput.schema';
import { WorkflowDraftWhereInputObjectSchema as WorkflowDraftWhereInputObjectSchema } from './objects/WorkflowDraftWhereInput.schema';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './objects/WorkflowDraftWhereUniqueInput.schema';
import { WorkflowDraftScalarFieldEnumSchema } from './enums/WorkflowDraftScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowDraftFindFirstSelectSchema: z.ZodType<Prisma.WorkflowDraftSelect> = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    nodes: z.boolean().optional(),
    edges: z.boolean().optional(),
    inputs: z.boolean().optional(),
    variables: z.boolean().optional(),
    message: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    workflow: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftSelect>;

export const WorkflowDraftFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    nodes: z.boolean().optional(),
    edges: z.boolean().optional(),
    inputs: z.boolean().optional(),
    variables: z.boolean().optional(),
    message: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    workflow: z.boolean().optional()
  }).strict();

export const WorkflowDraftFindFirstSchema: z.ZodType<Prisma.WorkflowDraftFindFirstArgs> = z.object({ select: WorkflowDraftFindFirstSelectSchema.optional(),  orderBy: z.union([WorkflowDraftOrderByWithRelationInputObjectSchema, WorkflowDraftOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowDraftWhereInputObjectSchema.optional(), cursor: WorkflowDraftWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowDraftScalarFieldEnumSchema, WorkflowDraftScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftFindFirstArgs>;

export const WorkflowDraftFindFirstZodSchema = z.object({ select: WorkflowDraftFindFirstSelectSchema.optional(),  orderBy: z.union([WorkflowDraftOrderByWithRelationInputObjectSchema, WorkflowDraftOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowDraftWhereInputObjectSchema.optional(), cursor: WorkflowDraftWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowDraftScalarFieldEnumSchema, WorkflowDraftScalarFieldEnumSchema.array()]).optional() }).strict();