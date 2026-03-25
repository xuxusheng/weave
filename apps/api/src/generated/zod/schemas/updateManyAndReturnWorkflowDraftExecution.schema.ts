import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionUpdateManyMutationInputObjectSchema as WorkflowDraftExecutionUpdateManyMutationInputObjectSchema } from './objects/WorkflowDraftExecutionUpdateManyMutationInput.schema';
import { WorkflowDraftExecutionWhereInputObjectSchema as WorkflowDraftExecutionWhereInputObjectSchema } from './objects/WorkflowDraftExecutionWhereInput.schema';

export const WorkflowDraftExecutionUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkflowDraftExecutionUpdateManyAndReturnArgs> = z.object({  data: WorkflowDraftExecutionUpdateManyMutationInputObjectSchema, where: WorkflowDraftExecutionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUpdateManyAndReturnArgs>;

export const WorkflowDraftExecutionUpdateManyAndReturnZodSchema = z.object({  data: WorkflowDraftExecutionUpdateManyMutationInputObjectSchema, where: WorkflowDraftExecutionWhereInputObjectSchema.optional() }).strict();