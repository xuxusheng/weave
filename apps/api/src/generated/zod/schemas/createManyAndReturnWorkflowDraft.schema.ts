import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftCreateManyInputObjectSchema as WorkflowDraftCreateManyInputObjectSchema } from './objects/WorkflowDraftCreateManyInput.schema';

export const WorkflowDraftCreateManyAndReturnSchema: z.ZodType<Prisma.WorkflowDraftCreateManyAndReturnArgs> = z.object({  data: z.union([ WorkflowDraftCreateManyInputObjectSchema, z.array(WorkflowDraftCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftCreateManyAndReturnArgs>;

export const WorkflowDraftCreateManyAndReturnZodSchema = z.object({  data: z.union([ WorkflowDraftCreateManyInputObjectSchema, z.array(WorkflowDraftCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();