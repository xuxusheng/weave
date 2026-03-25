import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftCreateManyInputObjectSchema as WorkflowDraftCreateManyInputObjectSchema } from './objects/WorkflowDraftCreateManyInput.schema';

export const WorkflowDraftCreateManySchema: z.ZodType<Prisma.WorkflowDraftCreateManyArgs> = z.object({ data: z.union([ WorkflowDraftCreateManyInputObjectSchema, z.array(WorkflowDraftCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftCreateManyArgs>;

export const WorkflowDraftCreateManyZodSchema = z.object({ data: z.union([ WorkflowDraftCreateManyInputObjectSchema, z.array(WorkflowDraftCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();