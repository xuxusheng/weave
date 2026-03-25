import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerUpdateManyMutationInputObjectSchema as WorkflowTriggerUpdateManyMutationInputObjectSchema } from './objects/WorkflowTriggerUpdateManyMutationInput.schema';
import { WorkflowTriggerWhereInputObjectSchema as WorkflowTriggerWhereInputObjectSchema } from './objects/WorkflowTriggerWhereInput.schema';

export const WorkflowTriggerUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkflowTriggerUpdateManyAndReturnArgs> = z.object({  data: WorkflowTriggerUpdateManyMutationInputObjectSchema, where: WorkflowTriggerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerUpdateManyAndReturnArgs>;

export const WorkflowTriggerUpdateManyAndReturnZodSchema = z.object({  data: WorkflowTriggerUpdateManyMutationInputObjectSchema, where: WorkflowTriggerWhereInputObjectSchema.optional() }).strict();