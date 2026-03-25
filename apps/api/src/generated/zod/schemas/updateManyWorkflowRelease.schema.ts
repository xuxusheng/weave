import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseUpdateManyMutationInputObjectSchema as WorkflowReleaseUpdateManyMutationInputObjectSchema } from './objects/WorkflowReleaseUpdateManyMutationInput.schema';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './objects/WorkflowReleaseWhereInput.schema';

export const WorkflowReleaseUpdateManySchema: z.ZodType<Prisma.WorkflowReleaseUpdateManyArgs> = z.object({ data: WorkflowReleaseUpdateManyMutationInputObjectSchema, where: WorkflowReleaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateManyArgs>;

export const WorkflowReleaseUpdateManyZodSchema = z.object({ data: WorkflowReleaseUpdateManyMutationInputObjectSchema, where: WorkflowReleaseWhereInputObjectSchema.optional() }).strict();