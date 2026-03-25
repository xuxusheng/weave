import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowExecutionUpdateManyMutationInputObjectSchema as WorkflowExecutionUpdateManyMutationInputObjectSchema } from './objects/WorkflowExecutionUpdateManyMutationInput.schema';
import { WorkflowExecutionWhereInputObjectSchema as WorkflowExecutionWhereInputObjectSchema } from './objects/WorkflowExecutionWhereInput.schema';

export const WorkflowExecutionUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkflowExecutionUpdateManyAndReturnArgs> = z.object({  data: WorkflowExecutionUpdateManyMutationInputObjectSchema, where: WorkflowExecutionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowExecutionUpdateManyAndReturnArgs>;

export const WorkflowExecutionUpdateManyAndReturnZodSchema = z.object({  data: WorkflowExecutionUpdateManyMutationInputObjectSchema, where: WorkflowExecutionWhereInputObjectSchema.optional() }).strict();