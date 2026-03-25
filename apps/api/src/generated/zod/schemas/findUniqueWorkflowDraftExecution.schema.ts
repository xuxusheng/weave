import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowDraftExecutionWhereUniqueInput.schema';

export const WorkflowDraftExecutionFindUniqueSchema: z.ZodType<Prisma.WorkflowDraftExecutionFindUniqueArgs> = z.object({   where: WorkflowDraftExecutionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionFindUniqueArgs>;

export const WorkflowDraftExecutionFindUniqueZodSchema = z.object({   where: WorkflowDraftExecutionWhereUniqueInputObjectSchema }).strict();