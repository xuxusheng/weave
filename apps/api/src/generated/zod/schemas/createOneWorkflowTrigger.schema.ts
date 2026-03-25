import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerCreateInputObjectSchema as WorkflowTriggerCreateInputObjectSchema } from './objects/WorkflowTriggerCreateInput.schema';
import { WorkflowTriggerUncheckedCreateInputObjectSchema as WorkflowTriggerUncheckedCreateInputObjectSchema } from './objects/WorkflowTriggerUncheckedCreateInput.schema';

export const WorkflowTriggerCreateOneSchema: z.ZodType<Prisma.WorkflowTriggerCreateArgs> = z.object({   data: z.union([WorkflowTriggerCreateInputObjectSchema, WorkflowTriggerUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerCreateArgs>;

export const WorkflowTriggerCreateOneZodSchema = z.object({   data: z.union([WorkflowTriggerCreateInputObjectSchema, WorkflowTriggerUncheckedCreateInputObjectSchema]) }).strict();