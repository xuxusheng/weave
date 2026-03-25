import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowExecutionCreateInputObjectSchema as WorkflowExecutionCreateInputObjectSchema } from './objects/WorkflowExecutionCreateInput.schema';
import { WorkflowExecutionUncheckedCreateInputObjectSchema as WorkflowExecutionUncheckedCreateInputObjectSchema } from './objects/WorkflowExecutionUncheckedCreateInput.schema';

export const WorkflowExecutionCreateOneSchema: z.ZodType<Prisma.WorkflowExecutionCreateArgs> = z.object({   data: z.union([WorkflowExecutionCreateInputObjectSchema, WorkflowExecutionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkflowExecutionCreateArgs>;

export const WorkflowExecutionCreateOneZodSchema = z.object({   data: z.union([WorkflowExecutionCreateInputObjectSchema, WorkflowExecutionUncheckedCreateInputObjectSchema]) }).strict();