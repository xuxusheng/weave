import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowExecutionWhereUniqueInput.schema';

export const WorkflowExecutionFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkflowExecutionFindUniqueOrThrowArgs> = z.object({   where: WorkflowExecutionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowExecutionFindUniqueOrThrowArgs>;

export const WorkflowExecutionFindUniqueOrThrowZodSchema = z.object({   where: WorkflowExecutionWhereUniqueInputObjectSchema }).strict();