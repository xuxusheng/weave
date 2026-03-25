import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionUpdateManyMutationInputObjectSchema as WorkflowDraftExecutionUpdateManyMutationInputObjectSchema } from './objects/WorkflowDraftExecutionUpdateManyMutationInput.schema';
import { WorkflowDraftExecutionWhereInputObjectSchema as WorkflowDraftExecutionWhereInputObjectSchema } from './objects/WorkflowDraftExecutionWhereInput.schema';

export const WorkflowDraftExecutionUpdateManySchema: z.ZodType<Prisma.WorkflowDraftExecutionUpdateManyArgs> = z.object({ data: WorkflowDraftExecutionUpdateManyMutationInputObjectSchema, where: WorkflowDraftExecutionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUpdateManyArgs>;

export const WorkflowDraftExecutionUpdateManyZodSchema = z.object({ data: WorkflowDraftExecutionUpdateManyMutationInputObjectSchema, where: WorkflowDraftExecutionWhereInputObjectSchema.optional() }).strict();