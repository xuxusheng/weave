import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionCreateInputObjectSchema as WorkflowDraftExecutionCreateInputObjectSchema } from './objects/WorkflowDraftExecutionCreateInput.schema';
import { WorkflowDraftExecutionUncheckedCreateInputObjectSchema as WorkflowDraftExecutionUncheckedCreateInputObjectSchema } from './objects/WorkflowDraftExecutionUncheckedCreateInput.schema';

export const WorkflowDraftExecutionCreateOneSchema: z.ZodType<Prisma.WorkflowDraftExecutionCreateArgs> = z.object({   data: z.union([WorkflowDraftExecutionCreateInputObjectSchema, WorkflowDraftExecutionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCreateArgs>;

export const WorkflowDraftExecutionCreateOneZodSchema = z.object({   data: z.union([WorkflowDraftExecutionCreateInputObjectSchema, WorkflowDraftExecutionUncheckedCreateInputObjectSchema]) }).strict();