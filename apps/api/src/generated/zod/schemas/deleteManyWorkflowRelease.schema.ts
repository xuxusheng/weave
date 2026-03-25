import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './objects/WorkflowReleaseWhereInput.schema';

export const WorkflowReleaseDeleteManySchema: z.ZodType<Prisma.WorkflowReleaseDeleteManyArgs> = z.object({ where: WorkflowReleaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseDeleteManyArgs>;

export const WorkflowReleaseDeleteManyZodSchema = z.object({ where: WorkflowReleaseWhereInputObjectSchema.optional() }).strict();