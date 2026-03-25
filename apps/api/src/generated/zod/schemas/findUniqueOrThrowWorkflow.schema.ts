import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './objects/WorkflowWhereUniqueInput.schema';

export const WorkflowFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkflowFindUniqueOrThrowArgs> = z.object({   where: WorkflowWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowFindUniqueOrThrowArgs>;

export const WorkflowFindUniqueOrThrowZodSchema = z.object({   where: WorkflowWhereUniqueInputObjectSchema }).strict();