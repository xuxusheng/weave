import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowCreateInputObjectSchema as WorkflowCreateInputObjectSchema } from './objects/WorkflowCreateInput.schema';
import { WorkflowUncheckedCreateInputObjectSchema as WorkflowUncheckedCreateInputObjectSchema } from './objects/WorkflowUncheckedCreateInput.schema';

export const WorkflowCreateOneSchema: z.ZodType<Prisma.WorkflowCreateArgs> = z.object({   data: z.union([WorkflowCreateInputObjectSchema, WorkflowUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkflowCreateArgs>;

export const WorkflowCreateOneZodSchema = z.object({   data: z.union([WorkflowCreateInputObjectSchema, WorkflowUncheckedCreateInputObjectSchema]) }).strict();