import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowTriggerCreateManyInputObjectSchema as WorkflowTriggerCreateManyInputObjectSchema } from './objects/WorkflowTriggerCreateManyInput.schema';

export const WorkflowTriggerCreateManyAndReturnSchema: z.ZodType<Prisma.WorkflowTriggerCreateManyAndReturnArgs> = z.object({  data: z.union([ WorkflowTriggerCreateManyInputObjectSchema, z.array(WorkflowTriggerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowTriggerCreateManyAndReturnArgs>;

export const WorkflowTriggerCreateManyAndReturnZodSchema = z.object({  data: z.union([ WorkflowTriggerCreateManyInputObjectSchema, z.array(WorkflowTriggerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();