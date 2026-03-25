import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowExecutionUpdateInputObjectSchema as WorkflowExecutionUpdateInputObjectSchema } from './objects/WorkflowExecutionUpdateInput.schema';
import { WorkflowExecutionUncheckedUpdateInputObjectSchema as WorkflowExecutionUncheckedUpdateInputObjectSchema } from './objects/WorkflowExecutionUncheckedUpdateInput.schema';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './objects/WorkflowExecutionWhereUniqueInput.schema';

export const WorkflowExecutionUpdateOneSchema: z.ZodType<Prisma.WorkflowExecutionUpdateArgs> = z.object({   data: z.union([WorkflowExecutionUpdateInputObjectSchema, WorkflowExecutionUncheckedUpdateInputObjectSchema]), where: WorkflowExecutionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowExecutionUpdateArgs>;

export const WorkflowExecutionUpdateOneZodSchema = z.object({   data: z.union([WorkflowExecutionUpdateInputObjectSchema, WorkflowExecutionUncheckedUpdateInputObjectSchema]), where: WorkflowExecutionWhereUniqueInputObjectSchema }).strict();