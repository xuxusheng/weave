import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowUpdateManyMutationInputObjectSchema as WorkflowUpdateManyMutationInputObjectSchema } from './objects/WorkflowUpdateManyMutationInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './objects/WorkflowWhereInput.schema';

export const WorkflowUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkflowUpdateManyAndReturnArgs> = z.object({  data: WorkflowUpdateManyMutationInputObjectSchema, where: WorkflowWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowUpdateManyAndReturnArgs>;

export const WorkflowUpdateManyAndReturnZodSchema = z.object({  data: WorkflowUpdateManyMutationInputObjectSchema, where: WorkflowWhereInputObjectSchema.optional() }).strict();