import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionCreateManyInputObjectSchema as WorkflowDraftExecutionCreateManyInputObjectSchema } from './objects/WorkflowDraftExecutionCreateManyInput.schema';

export const WorkflowDraftExecutionCreateManyAndReturnSchema: z.ZodType<Prisma.WorkflowDraftExecutionCreateManyAndReturnArgs> = z.object({  data: z.union([ WorkflowDraftExecutionCreateManyInputObjectSchema, z.array(WorkflowDraftExecutionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCreateManyAndReturnArgs>;

export const WorkflowDraftExecutionCreateManyAndReturnZodSchema = z.object({  data: z.union([ WorkflowDraftExecutionCreateManyInputObjectSchema, z.array(WorkflowDraftExecutionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();