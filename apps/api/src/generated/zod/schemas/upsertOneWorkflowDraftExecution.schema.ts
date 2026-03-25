import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowDraftExecutionWhereUniqueInput.schema';
import { WorkflowDraftExecutionCreateInputObjectSchema as WorkflowDraftExecutionCreateInputObjectSchema } from './objects/WorkflowDraftExecutionCreateInput.schema';
import { WorkflowDraftExecutionUncheckedCreateInputObjectSchema as WorkflowDraftExecutionUncheckedCreateInputObjectSchema } from './objects/WorkflowDraftExecutionUncheckedCreateInput.schema';
import { WorkflowDraftExecutionUpdateInputObjectSchema as WorkflowDraftExecutionUpdateInputObjectSchema } from './objects/WorkflowDraftExecutionUpdateInput.schema';
import { WorkflowDraftExecutionUncheckedUpdateInputObjectSchema as WorkflowDraftExecutionUncheckedUpdateInputObjectSchema } from './objects/WorkflowDraftExecutionUncheckedUpdateInput.schema';

export const WorkflowDraftExecutionUpsertOneSchema: z.ZodType<Prisma.WorkflowDraftExecutionUpsertArgs> = z.object({   where: WorkflowDraftExecutionWhereUniqueInputObjectSchema, create: z.union([ WorkflowDraftExecutionCreateInputObjectSchema, WorkflowDraftExecutionUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowDraftExecutionUpdateInputObjectSchema, WorkflowDraftExecutionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUpsertArgs>;

export const WorkflowDraftExecutionUpsertOneZodSchema = z.object({   where: WorkflowDraftExecutionWhereUniqueInputObjectSchema, create: z.union([ WorkflowDraftExecutionCreateInputObjectSchema, WorkflowDraftExecutionUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowDraftExecutionUpdateInputObjectSchema, WorkflowDraftExecutionUncheckedUpdateInputObjectSchema ]) }).strict();