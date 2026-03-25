import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './objects/WorkflowWhereUniqueInput.schema';
import { WorkflowCreateInputObjectSchema as WorkflowCreateInputObjectSchema } from './objects/WorkflowCreateInput.schema';
import { WorkflowUncheckedCreateInputObjectSchema as WorkflowUncheckedCreateInputObjectSchema } from './objects/WorkflowUncheckedCreateInput.schema';
import { WorkflowUpdateInputObjectSchema as WorkflowUpdateInputObjectSchema } from './objects/WorkflowUpdateInput.schema';
import { WorkflowUncheckedUpdateInputObjectSchema as WorkflowUncheckedUpdateInputObjectSchema } from './objects/WorkflowUncheckedUpdateInput.schema';

export const WorkflowUpsertOneSchema: z.ZodType<Prisma.WorkflowUpsertArgs> = z.object({   where: WorkflowWhereUniqueInputObjectSchema, create: z.union([ WorkflowCreateInputObjectSchema, WorkflowUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowUpdateInputObjectSchema, WorkflowUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkflowUpsertArgs>;

export const WorkflowUpsertOneZodSchema = z.object({   where: WorkflowWhereUniqueInputObjectSchema, create: z.union([ WorkflowCreateInputObjectSchema, WorkflowUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowUpdateInputObjectSchema, WorkflowUncheckedUpdateInputObjectSchema ]) }).strict();