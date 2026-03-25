import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowCreateManyInputObjectSchema as WorkflowCreateManyInputObjectSchema } from './objects/WorkflowCreateManyInput.schema';

export const WorkflowCreateManySchema: z.ZodType<Prisma.WorkflowCreateManyArgs> = z.object({ data: z.union([ WorkflowCreateManyInputObjectSchema, z.array(WorkflowCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowCreateManyArgs>;

export const WorkflowCreateManyZodSchema = z.object({ data: z.union([ WorkflowCreateManyInputObjectSchema, z.array(WorkflowCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();