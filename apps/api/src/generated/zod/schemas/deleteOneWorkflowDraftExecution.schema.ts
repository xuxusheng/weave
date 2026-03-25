import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowDraftExecutionWhereUniqueInput.schema';

export const WorkflowDraftExecutionDeleteOneSchema: z.ZodType<Prisma.WorkflowDraftExecutionDeleteArgs> = z.object({   where: WorkflowDraftExecutionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionDeleteArgs>;

export const WorkflowDraftExecutionDeleteOneZodSchema = z.object({   where: WorkflowDraftExecutionWhereUniqueInputObjectSchema }).strict();