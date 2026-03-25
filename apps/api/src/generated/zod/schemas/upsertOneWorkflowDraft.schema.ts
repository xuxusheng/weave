import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './objects/WorkflowDraftWhereUniqueInput.schema';
import { WorkflowDraftCreateInputObjectSchema as WorkflowDraftCreateInputObjectSchema } from './objects/WorkflowDraftCreateInput.schema';
import { WorkflowDraftUncheckedCreateInputObjectSchema as WorkflowDraftUncheckedCreateInputObjectSchema } from './objects/WorkflowDraftUncheckedCreateInput.schema';
import { WorkflowDraftUpdateInputObjectSchema as WorkflowDraftUpdateInputObjectSchema } from './objects/WorkflowDraftUpdateInput.schema';
import { WorkflowDraftUncheckedUpdateInputObjectSchema as WorkflowDraftUncheckedUpdateInputObjectSchema } from './objects/WorkflowDraftUncheckedUpdateInput.schema';

export const WorkflowDraftUpsertOneSchema: z.ZodType<Prisma.WorkflowDraftUpsertArgs> = z.object({   where: WorkflowDraftWhereUniqueInputObjectSchema, create: z.union([ WorkflowDraftCreateInputObjectSchema, WorkflowDraftUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowDraftUpdateInputObjectSchema, WorkflowDraftUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftUpsertArgs>;

export const WorkflowDraftUpsertOneZodSchema = z.object({   where: WorkflowDraftWhereUniqueInputObjectSchema, create: z.union([ WorkflowDraftCreateInputObjectSchema, WorkflowDraftUncheckedCreateInputObjectSchema ]), update: z.union([ WorkflowDraftUpdateInputObjectSchema, WorkflowDraftUncheckedUpdateInputObjectSchema ]) }).strict();