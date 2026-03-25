import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './objects/WorkflowReleaseWhereUniqueInput.schema';

export const WorkflowReleaseFindUniqueSchema: z.ZodType<Prisma.WorkflowReleaseFindUniqueArgs> = z.object({   where: WorkflowReleaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseFindUniqueArgs>;

export const WorkflowReleaseFindUniqueZodSchema = z.object({   where: WorkflowReleaseWhereUniqueInputObjectSchema }).strict();