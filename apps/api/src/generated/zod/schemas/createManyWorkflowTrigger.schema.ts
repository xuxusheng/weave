import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerCreateManyInputObjectSchema as WorkflowTriggerCreateManyInputObjectSchema } from './objects/WorkflowTriggerCreateManyInput.schema';

export const WorkflowTriggerCreateManySchema: z.ZodType<Prisma.WorkflowTriggerCreateManyArgs> = z.object({ data: z.union([ WorkflowTriggerCreateManyInputObjectSchema, z.array(WorkflowTriggerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerCreateManyArgs>;

export const WorkflowTriggerCreateManyZodSchema = z.object({ data: z.union([ WorkflowTriggerCreateManyInputObjectSchema, z.array(WorkflowTriggerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();