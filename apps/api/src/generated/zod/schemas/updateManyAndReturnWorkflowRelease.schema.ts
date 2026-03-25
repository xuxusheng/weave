import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseUpdateManyMutationInputObjectSchema as WorkflowReleaseUpdateManyMutationInputObjectSchema } from './objects/WorkflowReleaseUpdateManyMutationInput.schema';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './objects/WorkflowReleaseWhereInput.schema';

export const WorkflowReleaseUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkflowReleaseUpdateManyAndReturnArgs> = z.object({  data: WorkflowReleaseUpdateManyMutationInputObjectSchema, where: WorkflowReleaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateManyAndReturnArgs>;

export const WorkflowReleaseUpdateManyAndReturnZodSchema = z.object({  data: WorkflowReleaseUpdateManyMutationInputObjectSchema, where: WorkflowReleaseWhereInputObjectSchema.optional() }).strict();