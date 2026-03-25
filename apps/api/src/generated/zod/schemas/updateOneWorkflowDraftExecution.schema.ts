import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionUpdateInputObjectSchema as WorkflowDraftExecutionUpdateInputObjectSchema } from './objects/WorkflowDraftExecutionUpdateInput.schema';
import { WorkflowDraftExecutionUncheckedUpdateInputObjectSchema as WorkflowDraftExecutionUncheckedUpdateInputObjectSchema } from './objects/WorkflowDraftExecutionUncheckedUpdateInput.schema';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowDraftExecutionWhereUniqueInput.schema';

export const WorkflowDraftExecutionUpdateOneSchema: z.ZodType<Prisma.WorkflowDraftExecutionUpdateArgs> = z.object({   data: z.union([WorkflowDraftExecutionUpdateInputObjectSchema, WorkflowDraftExecutionUncheckedUpdateInputObjectSchema]), where: WorkflowDraftExecutionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUpdateArgs>;

export const WorkflowDraftExecutionUpdateOneZodSchema = z.object({   data: z.union([WorkflowDraftExecutionUpdateInputObjectSchema, WorkflowDraftExecutionUncheckedUpdateInputObjectSchema]), where: WorkflowDraftExecutionWhereUniqueInputObjectSchema }).strict();