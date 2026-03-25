import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionCreateManyInputObjectSchema as WorkflowDraftExecutionCreateManyInputObjectSchema } from './objects/WorkflowDraftExecutionCreateManyInput.schema';

export const WorkflowDraftExecutionCreateManySchema: z.ZodType<Prisma.WorkflowDraftExecutionCreateManyArgs> = z.object({ data: z.union([ WorkflowDraftExecutionCreateManyInputObjectSchema, z.array(WorkflowDraftExecutionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCreateManyArgs>;

export const WorkflowDraftExecutionCreateManyZodSchema = z.object({ data: z.union([ WorkflowDraftExecutionCreateManyInputObjectSchema, z.array(WorkflowDraftExecutionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();