import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './objects/WorkflowTriggerWhereUniqueInput.schema';
import { WorkflowTriggerCreateInputObjectSchema as WorkflowTriggerCreateInputObjectSchema } from './objects/WorkflowTriggerCreateInput.schema';
import { WorkflowTriggerUncheckedCreateInputObjectSchema as WorkflowTriggerUncheckedCreateInputObjectSchema } from './objects/WorkflowTriggerUncheckedCreateInput.schema';
import { WorkflowTriggerUpdateInputObjectSchema as WorkflowTriggerUpdateInputObjectSchema } from './objects/WorkflowTriggerUpdateInput.schema';
import { WorkflowTriggerUncheckedUpdateInputObjectSchema as WorkflowTriggerUncheckedUpdateInputObjectSchema } from './objects/WorkflowTriggerUncheckedUpdateInput.schema';

export const WorkflowTriggerUpsertOneSchema: z.ZodType<Prisma.WorkflowTriggerUpsertArgs> = z.object({   where: WorkflowTriggerWhereUniqueInputObjectSchema, create: z.union([ WorkflowTriggerCreateInputObjectSchema, WorkflowTriggerUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowTriggerUpdateInputObjectSchema, WorkflowTriggerUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerUpsertArgs>;

export const WorkflowTriggerUpsertOneZodSchema = z.object({   where: WorkflowTriggerWhereUniqueInputObjectSchema, create: z.union([ WorkflowTriggerCreateInputObjectSchema, WorkflowTriggerUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowTriggerUpdateInputObjectSchema, WorkflowTriggerUncheckedUpdateInputObjectSchema ]) }).strict();