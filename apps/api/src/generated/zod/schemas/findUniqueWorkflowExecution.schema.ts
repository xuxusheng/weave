import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowExecutionWhereUniqueInput.schema';

export const WorkflowExecutionFindUniqueSchema: z.ZodType<Prisma.WorkflowExecutionFindUniqueArgs> = z.object({   where: WorkflowExecutionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowExecutionFindUniqueArgs>;

export const WorkflowExecutionFindUniqueZodSchema = z.object({   where: WorkflowExecutionWhereUniqueInputObjectSchema }).strict();