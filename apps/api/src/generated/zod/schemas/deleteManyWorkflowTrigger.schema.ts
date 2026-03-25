import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerWhereInputObjectSchema as WorkflowTriggerWhereInputObjectSchema } from './objects/WorkflowTriggerWhereInput.schema';

export const WorkflowTriggerDeleteManySchema: z.ZodType<Prisma.WorkflowTriggerDeleteManyArgs> = z.object({ where: WorkflowTriggerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerDeleteManyArgs>;

export const WorkflowTriggerDeleteManyZodSchema = z.object({ where: WorkflowTriggerWhereInputObjectSchema.optional() }).strict();