import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerOrderByWithRelationInputObjectSchema as WorkflowTriggerOrderByWithRelationInputObjectSchema } from './objects/WorkflowTriggerOrderByWithRelationInput.schema';
import { WorkflowTriggerWhereInputObjectSchema as WorkflowTriggerWhereInputObjectSchema } from './objects/WorkflowTriggerWhereInput.schema';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './objects/WorkflowTriggerWhereUniqueInput.schema';
import { WorkflowTriggerScalarFieldEnumSchema } from './enums/WorkflowTriggerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowTriggerFindManySelectSchema: z.ZodType<Prisma.WorkflowTriggerSelect> = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    config: z.boolean().optional(),
    inputs: z.boolean().optional(),
    kestraFlowId: z.boolean().optional(),
    disabled: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workflow: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerSelect>;

export const WorkflowTriggerFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    workflowId: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    config: z.boolean().optional(),
    inputs: z.boolean().optional(),
    kestraFlowId: z.boolean().optional(),
    disabled: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workflow: z.boolean().optional()
  }).strict();

export const WorkflowTriggerFindManySchema: z.ZodType<Prisma.WorkflowTriggerFindManyArgs> = z.object({ select: WorkflowTriggerFindManySelectSchema.optional(),  orderBy: z.union([WorkflowTriggerOrderByWithRelationInputObjectSchema, WorkflowTriggerOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowTriggerWhereInputObjectSchema.optional(), cursor: WorkflowTriggerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowTriggerScalarFieldEnumSchema, WorkflowTriggerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerFindManyArgs>;

export const WorkflowTriggerFindManyZodSchema = z.object({ select: WorkflowTriggerFindManySelectSchema.optional(),  orderBy: z.union([WorkflowTriggerOrderByWithRelationInputObjectSchema, WorkflowTriggerOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowTriggerWhereInputObjectSchema.optional(), cursor: WorkflowTriggerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowTriggerScalarFieldEnumSchema, WorkflowTriggerScalarFieldEnumSchema.array()]).optional() }).strict();