import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './objects/WorkflowTriggerWhereUniqueInput.schema';

export const WorkflowTriggerFindUniqueSchema: z.ZodType<Prisma.WorkflowTriggerFindUniqueArgs> = z.object({   where: WorkflowTriggerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerFindUniqueArgs>;

export const WorkflowTriggerFindUniqueZodSchema = z.object({   where: WorkflowTriggerWhereUniqueInputObjectSchema }).strict();