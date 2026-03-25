import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowDraftExecutionWhereUniqueInput.schema';

export const WorkflowDraftExecutionFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkflowDraftExecutionFindUniqueOrThrowArgs> = z.object({   where: WorkflowDraftExecutionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionFindUniqueOrThrowArgs>;

export const WorkflowDraftExecutionFindUniqueOrThrowZodSchema = z.object({   where: WorkflowDraftExecutionWhereUniqueInputObjectSchema }).strict();