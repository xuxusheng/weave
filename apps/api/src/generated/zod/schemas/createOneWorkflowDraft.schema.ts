import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftCreateInputObjectSchema as WorkflowDraftCreateInputObjectSchema } from './objects/WorkflowDraftCreateInput.schema';
import { WorkflowDraftUncheckedCreateInputObjectSchema as WorkflowDraftUncheckedCreateInputObjectSchema } from './objects/WorkflowDraftUncheckedCreateInput.schema';

export const WorkflowDraftCreateOneSchema: z.ZodType<Prisma.WorkflowDraftCreateArgs> = z.object({   data: z.union([WorkflowDraftCreateInputObjectSchema, WorkflowDraftUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftCreateArgs>;

export const WorkflowDraftCreateOneZodSchema = z.object({   data: z.union([WorkflowDraftCreateInputObjectSchema, WorkflowDraftUncheckedCreateInputObjectSchema]) }).strict();