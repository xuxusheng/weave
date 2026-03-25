import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowUpdateManyMutationInputObjectSchema as WorkflowUpdateManyMutationInputObjectSchema } from './objects/WorkflowUpdateManyMutationInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './objects/WorkflowWhereInput.schema';

export const WorkflowUpdateManySchema: z.ZodType<Prisma.WorkflowUpdateManyArgs> = z.object({ data: WorkflowUpdateManyMutationInputObjectSchema, where: WorkflowWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowUpdateManyArgs>;

export const WorkflowUpdateManyZodSchema = z.object({ data: WorkflowUpdateManyMutationInputObjectSchema, where: WorkflowWhereInputObjectSchema.optional() }).strict();