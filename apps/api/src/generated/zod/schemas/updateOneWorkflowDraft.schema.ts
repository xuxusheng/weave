import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftUpdateInputObjectSchema as WorkflowDraftUpdateInputObjectSchema } from './objects/WorkflowDraftUpdateInput.schema';
import { WorkflowDraftUncheckedUpdateInputObjectSchema as WorkflowDraftUncheckedUpdateInputObjectSchema } from './objects/WorkflowDraftUncheckedUpdateInput.schema';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './objects/WorkflowDraftWhereUniqueInput.schema';

export const WorkflowDraftUpdateOneSchema: z.ZodType<Prisma.WorkflowDraftUpdateArgs> = z.object({   data: z.union([WorkflowDraftUpdateInputObjectSchema, WorkflowDraftUncheckedUpdateInputObjectSchema]), where: WorkflowDraftWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftUpdateArgs>;

export const WorkflowDraftUpdateOneZodSchema = z.object({   data: z.union([WorkflowDraftUpdateInputObjectSchema, WorkflowDraftUncheckedUpdateInputObjectSchema]), where: WorkflowDraftWhereUniqueInputObjectSchema }).strict();