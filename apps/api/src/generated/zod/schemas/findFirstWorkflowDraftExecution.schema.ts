import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionOrderByWithRelationInputObjectSchema as WorkflowDraftExecutionOrderByWithRelationInputObjectSchema } from './objects/WorkflowDraftExecutionOrderByWithRelationInput.schema';
import { WorkflowDraftExecutionWhereInputObjectSchema as WorkflowDraftExecutionWhereInputObjectSchema } from './objects/WorkflowDraftExecutionWhereInput.schema';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowDraftExecutionWhereUniqueInput.schema';
import { WorkflowDraftExecutionScalarFieldEnumSchema } from './enums/WorkflowDraftExecutionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowDraftExecutionFindFirstSelectSchema: z.ZodType<Prisma.WorkflowDraftExecutionSelect> = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    kestraExecId: z.boolean().optional(),
    nodes: z.boolean().optional(),
    edges: z.boolean().optional(),
    inputs: z.boolean().optional(),
    variables: z.boolean().optional(),
    inputValues: z.boolean().optional(),
    state: z.boolean().optional(),
    taskRuns: z.boolean().optional(),
    triggeredBy: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    endedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workflow: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionSelect>;

export const WorkflowDraftExecutionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    kestraExecId: z.boolean().optional(),
    nodes: z.boolean().optional(),
    edges: z.boolean().optional(),
    inputs: z.boolean().optional(),
    variables: z.boolean().optional(),
    inputValues: z.boolean().optional(),
    state: z.boolean().optional(),
    taskRuns: z.boolean().optional(),
    triggeredBy: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    endedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workflow: z.boolean().optional()
  }).strict();

export const WorkflowDraftExecutionFindFirstSchema: z.ZodType<Prisma.WorkflowDraftExecutionFindFirstArgs> = z.object({ select: WorkflowDraftExecutionFindFirstSelectSchema.optional(),  orderBy: z.union([WorkflowDraftExecutionOrderByWithRelationInputObjectSchema, WorkflowDraftExecutionOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowDraftExecutionWhereInputObjectSchema.optional(), cursor: WorkflowDraftExecutionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowDraftExecutionScalarFieldEnumSchema, WorkflowDraftExecutionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionFindFirstArgs>;

export const WorkflowDraftExecutionFindFirstZodSchema = z.object({ select: WorkflowDraftExecutionFindFirstSelectSchema.optional(),  orderBy: z.union([WorkflowDraftExecutionOrderByWithRelationInputObjectSchema, WorkflowDraftExecutionOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowDraftExecutionWhereInputObjectSchema.optional(), cursor: WorkflowDraftExecutionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowDraftExecutionScalarFieldEnumSchema, WorkflowDraftExecutionScalarFieldEnumSchema.array()]).optional() }).strict();