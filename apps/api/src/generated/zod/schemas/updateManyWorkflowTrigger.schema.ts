import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerUpdateManyMutationInputObjectSchema as WorkflowTriggerUpdateManyMutationInputObjectSchema } from './objects/WorkflowTriggerUpdateManyMutationInput.schema';
import { WorkflowTriggerWhereInputObjectSchema as WorkflowTriggerWhereInputObjectSchema } from './objects/WorkflowTriggerWhereInput.schema';

export const WorkflowTriggerUpdateManySchema: z.ZodType<Prisma.WorkflowTriggerUpdateManyArgs> = z.object({ data: WorkflowTriggerUpdateManyMutationInputObjectSchema, where: WorkflowTriggerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerUpdateManyArgs>;

export const WorkflowTriggerUpdateManyZodSchema = z.object({ data: WorkflowTriggerUpdateManyMutationInputObjectSchema, where: WorkflowTriggerWhereInputObjectSchema.optional() }).strict();