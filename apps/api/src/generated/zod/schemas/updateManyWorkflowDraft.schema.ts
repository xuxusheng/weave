import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftUpdateManyMutationInputObjectSchema as WorkflowDraftUpdateManyMutationInputObjectSchema } from './objects/WorkflowDraftUpdateManyMutationInput.schema';
import { WorkflowDraftWhereInputObjectSchema as WorkflowDraftWhereInputObjectSchema } from './objects/WorkflowDraftWhereInput.schema';

export const WorkflowDraftUpdateManySchema: z.ZodType<Prisma.WorkflowDraftUpdateManyArgs> = z.object({ data: WorkflowDraftUpdateManyMutationInputObjectSchema, where: WorkflowDraftWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftUpdateManyArgs>;

export const WorkflowDraftUpdateManyZodSchema = z.object({ data: WorkflowDraftUpdateManyMutationInputObjectSchema, where: WorkflowDraftWhereInputObjectSchema.optional() }).strict();