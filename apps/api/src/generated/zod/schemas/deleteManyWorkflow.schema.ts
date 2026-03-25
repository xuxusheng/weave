import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './objects/WorkflowWhereInput.schema';

export const WorkflowDeleteManySchema: z.ZodType<Prisma.WorkflowDeleteManyArgs> = z.object({ where: WorkflowWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDeleteManyArgs>;

export const WorkflowDeleteManyZodSchema = z.object({ where: WorkflowWhereInputObjectSchema.optional() }).strict();