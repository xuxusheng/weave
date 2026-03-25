import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionWhereInputObjectSchema as WorkflowDraftExecutionWhereInputObjectSchema } from './objects/WorkflowDraftExecutionWhereInput.schema';

export const WorkflowDraftExecutionDeleteManySchema: z.ZodType<Prisma.WorkflowDraftExecutionDeleteManyArgs> = z.object({ where: WorkflowDraftExecutionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionDeleteManyArgs>;

export const WorkflowDraftExecutionDeleteManyZodSchema = z.object({ where: WorkflowDraftExecutionWhereInputObjectSchema.optional() }).strict();