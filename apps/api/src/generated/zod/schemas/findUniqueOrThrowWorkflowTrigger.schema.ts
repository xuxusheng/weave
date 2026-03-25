import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './objects/WorkflowTriggerWhereUniqueInput.schema';

export const WorkflowTriggerFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkflowTriggerFindUniqueOrThrowArgs> = z.object({   where: WorkflowTriggerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerFindUniqueOrThrowArgs>;

export const WorkflowTriggerFindUniqueOrThrowZodSchema = z.object({   where: WorkflowTriggerWhereUniqueInputObjectSchema }).strict();