import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowExecutionOrderByWithRelationInputObjectSchema as WorkflowExecutionOrderByWithRelationInputObjectSchema } from './objects/WorkflowExecutionOrderByWithRelationInput.schema';
import { WorkflowExecutionWhereInputObjectSchema as WorkflowExecutionWhereInputObjectSchema } from './objects/WorkflowExecutionWhereInput.schema';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowExecutionWhereUniqueInput.schema';
import { WorkflowExecutionScalarFieldEnumSchema } from './enums/WorkflowExecutionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowExecutionFindFirstSelectSchema: z.ZodType<Prisma.WorkflowExecutionSelect> = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    releaseId: z.boolean().optional(),
    kestraExecId: z.boolean().optional(),
    inputValues: z.boolean().optional(),
    state: z.boolean().optional(),
    taskRuns: z.boolean().optional(),
    triggeredBy: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    endedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workflow: z.boolean().optional(),
    release: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkflowExecutionSelect>;

export const WorkflowExecutionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    releaseId: z.boolean().optional(),
    kestraExecId: z.boolean().optional(),
    inputValues: z.boolean().optional(),
    state: z.boolean().optional(),
    taskRuns: z.boolean().optional(),
    triggeredBy: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    endedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workflow: z.boolean().optional(),
    release: z.boolean().optional()
  }).strict();

export const WorkflowExecutionFindFirstSchema: z.ZodType<Prisma.WorkflowExecutionFindFirstArgs> = z.object({ select: WorkflowExecutionFindFirstSelectSchema.optional(),  orderBy: z.union([WorkflowExecutionOrderByWithRelationInputObjectSchema, WorkflowExecutionOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowExecutionWhereInputObjectSchema.optional(), cursor: WorkflowExecutionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowExecutionScalarFieldEnumSchema, WorkflowExecutionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowExecutionFindFirstArgs>;

export const WorkflowExecutionFindFirstZodSchema = z.object({ select: WorkflowExecutionFindFirstSelectSchema.optional(),  orderBy: z.union([WorkflowExecutionOrderByWithRelationInputObjectSchema, WorkflowExecutionOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowExecutionWhereInputObjectSchema.optional(), cursor: WorkflowExecutionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowExecutionScalarFieldEnumSchema, WorkflowExecutionScalarFieldEnumSchema.array()]).optional() }).strict();