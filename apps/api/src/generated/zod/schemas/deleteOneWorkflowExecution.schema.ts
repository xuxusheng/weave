import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowExecutionWhereUniqueInput.schema';

export const WorkflowExecutionDeleteOneSchema: z.ZodType<Prisma.WorkflowExecutionDeleteArgs> = z.object({   where: WorkflowExecutionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowExecutionDeleteArgs>;

export const WorkflowExecutionDeleteOneZodSchema = z.object({   where: WorkflowExecutionWhereUniqueInputObjectSchema }).strict();