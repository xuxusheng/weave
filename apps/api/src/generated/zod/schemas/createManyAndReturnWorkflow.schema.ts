import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowCreateManyInputObjectSchema as WorkflowCreateManyInputObjectSchema } from './objects/WorkflowCreateManyInput.schema';

export const WorkflowCreateManyAndReturnSchema: z.ZodType<Prisma.WorkflowCreateManyAndReturnArgs> = z.object({  data: z.union([ WorkflowCreateManyInputObjectSchema, z.array(WorkflowCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowCreateManyAndReturnArgs>;

export const WorkflowCreateManyAndReturnZodSchema = z.object({  data: z.union([ WorkflowCreateManyInputObjectSchema, z.array(WorkflowCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();