import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseCreateInputObjectSchema as WorkflowReleaseCreateInputObjectSchema } from './objects/WorkflowReleaseCreateInput.schema';
import { WorkflowReleaseUncheckedCreateInputObjectSchema as WorkflowReleaseUncheckedCreateInputObjectSchema } from './objects/WorkflowReleaseUncheckedCreateInput.schema';

export const WorkflowReleaseCreateOneSchema: z.ZodType<Prisma.WorkflowReleaseCreateArgs> = z.object({   data: z.union([WorkflowReleaseCreateInputObjectSchema, WorkflowReleaseUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateArgs>;

export const WorkflowReleaseCreateOneZodSchema = z.object({   data: z.union([WorkflowReleaseCreateInputObjectSchema, WorkflowReleaseUncheckedCreateInputObjectSchema]) }).strict();