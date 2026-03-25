import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './objects/WorkflowReleaseWhereUniqueInput.schema';

export const WorkflowReleaseFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkflowReleaseFindUniqueOrThrowArgs> = z.object({   where: WorkflowReleaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseFindUniqueOrThrowArgs>;

export const WorkflowReleaseFindUniqueOrThrowZodSchema = z.object({   where: WorkflowReleaseWhereUniqueInputObjectSchema }).strict();