import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseUpdateInputObjectSchema as WorkflowReleaseUpdateInputObjectSchema } from './objects/WorkflowReleaseUpdateInput.schema';
import { WorkflowReleaseUncheckedUpdateInputObjectSchema as WorkflowReleaseUncheckedUpdateInputObjectSchema } from './objects/WorkflowReleaseUncheckedUpdateInput.schema';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './objects/WorkflowReleaseWhereUniqueInput.schema';

export const WorkflowReleaseUpdateOneSchema: z.ZodType<Prisma.WorkflowReleaseUpdateArgs> = z.object({   data: z.union([WorkflowReleaseUpdateInputObjectSchema, WorkflowReleaseUncheckedUpdateInputObjectSchema]), where: WorkflowReleaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateArgs>;

export const WorkflowReleaseUpdateOneZodSchema = z.object({   data: z.union([WorkflowReleaseUpdateInputObjectSchema, WorkflowReleaseUncheckedUpdateInputObjectSchema]), where: WorkflowReleaseWhereUniqueInputObjectSchema }).strict();