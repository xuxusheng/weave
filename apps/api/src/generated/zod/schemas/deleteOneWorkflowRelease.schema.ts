import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './objects/WorkflowReleaseWhereUniqueInput.schema';

export const WorkflowReleaseDeleteOneSchema: z.ZodType<Prisma.WorkflowReleaseDeleteArgs> = z.object({   where: WorkflowReleaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseDeleteArgs>;

export const WorkflowReleaseDeleteOneZodSchema = z.object({   where: WorkflowReleaseWhereUniqueInputObjectSchema }).strict();