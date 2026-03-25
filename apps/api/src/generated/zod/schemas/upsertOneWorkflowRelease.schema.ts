import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './objects/WorkflowReleaseWhereUniqueInput.schema';
import { WorkflowReleaseCreateInputObjectSchema as WorkflowReleaseCreateInputObjectSchema } from './objects/WorkflowReleaseCreateInput.schema';
import { WorkflowReleaseUncheckedCreateInputObjectSchema as WorkflowReleaseUncheckedCreateInputObjectSchema } from './objects/WorkflowReleaseUncheckedCreateInput.schema';
import { WorkflowReleaseUpdateInputObjectSchema as WorkflowReleaseUpdateInputObjectSchema } from './objects/WorkflowReleaseUpdateInput.schema';
import { WorkflowReleaseUncheckedUpdateInputObjectSchema as WorkflowReleaseUncheckedUpdateInputObjectSchema } from './objects/WorkflowReleaseUncheckedUpdateInput.schema';

export const WorkflowReleaseUpsertOneSchema: z.ZodType<Prisma.WorkflowReleaseUpsertArgs> = z.object({   where: WorkflowReleaseWhereUniqueInputObjectSchema, create: z.union([ WorkflowReleaseCreateInputObjectSchema, WorkflowReleaseUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowReleaseUpdateInputObjectSchema, WorkflowReleaseUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkflowReleaseUpsertArgs>;

export const WorkflowReleaseUpsertOneZodSchema = z.object({   where: WorkflowReleaseWhereUniqueInputObjectSchema, create: z.union([ WorkflowReleaseCreateInputObjectSchema, WorkflowReleaseUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowReleaseUpdateInputObjectSchema, WorkflowReleaseUncheckedUpdateInputObjectSchema ]) }).strict();