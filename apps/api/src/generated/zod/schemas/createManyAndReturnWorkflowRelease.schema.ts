import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseCreateManyInputObjectSchema as WorkflowReleaseCreateManyInputObjectSchema } from './objects/WorkflowReleaseCreateManyInput.schema';

export const WorkflowReleaseCreateManyAndReturnSchema: z.ZodType<Prisma.WorkflowReleaseCreateManyAndReturnArgs> = z.object({  data: z.union([ WorkflowReleaseCreateManyInputObjectSchema, z.array(WorkflowReleaseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateManyAndReturnArgs>;

export const WorkflowReleaseCreateManyAndReturnZodSchema = z.object({  data: z.union([ WorkflowReleaseCreateManyInputObjectSchema, z.array(WorkflowReleaseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();