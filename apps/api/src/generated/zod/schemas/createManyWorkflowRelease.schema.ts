import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseCreateManyInputObjectSchema as WorkflowReleaseCreateManyInputObjectSchema } from './objects/WorkflowReleaseCreateManyInput.schema';

export const WorkflowReleaseCreateManySchema: z.ZodType<Prisma.WorkflowReleaseCreateManyArgs> = z.object({ data: z.union([ WorkflowReleaseCreateManyInputObjectSchema, z.array(WorkflowReleaseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateManyArgs>;

export const WorkflowReleaseCreateManyZodSchema = z.object({ data: z.union([ WorkflowReleaseCreateManyInputObjectSchema, z.array(WorkflowReleaseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();