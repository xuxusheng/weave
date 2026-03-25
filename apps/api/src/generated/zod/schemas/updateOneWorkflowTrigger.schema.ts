import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerUpdateInputObjectSchema as WorkflowTriggerUpdateInputObjectSchema } from './objects/WorkflowTriggerUpdateInput.schema';
import { WorkflowTriggerUncheckedUpdateInputObjectSchema as WorkflowTriggerUncheckedUpdateInputObjectSchema } from './objects/WorkflowTriggerUncheckedUpdateInput.schema';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './objects/WorkflowTriggerWhereUniqueInput.schema';

export const WorkflowTriggerUpdateOneSchema: z.ZodType<Prisma.WorkflowTriggerUpdateArgs> = z.object({   data: z.union([WorkflowTriggerUpdateInputObjectSchema, WorkflowTriggerUncheckedUpdateInputObjectSchema]), where: WorkflowTriggerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerUpdateArgs>;

export const WorkflowTriggerUpdateOneZodSchema = z.object({   data: z.union([WorkflowTriggerUpdateInputObjectSchema, WorkflowTriggerUncheckedUpdateInputObjectSchema]), where: WorkflowTriggerWhereUniqueInputObjectSchema }).strict();