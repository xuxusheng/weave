import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './objects/WorkflowTriggerWhereUniqueInput.schema';

export const WorkflowTriggerDeleteOneSchema: z.ZodType<Prisma.WorkflowTriggerDeleteArgs> = z.object({   where: WorkflowTriggerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerDeleteArgs>;

export const WorkflowTriggerDeleteOneZodSchema = z.object({   where: WorkflowTriggerWhereUniqueInputObjectSchema }).strict();