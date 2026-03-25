import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftUpdateManyMutationInputObjectSchema as WorkflowDraftUpdateManyMutationInputObjectSchema } from './objects/WorkflowDraftUpdateManyMutationInput.schema';
import { WorkflowDraftWhereInputObjectSchema as WorkflowDraftWhereInputObjectSchema } from './objects/WorkflowDraftWhereInput.schema';

export const WorkflowDraftUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkflowDraftUpdateManyAndReturnArgs> = z.object({  data: WorkflowDraftUpdateManyMutationInputObjectSchema, where: WorkflowDraftWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftUpdateManyAndReturnArgs>;

export const WorkflowDraftUpdateManyAndReturnZodSchema = z.object({  data: WorkflowDraftUpdateManyMutationInputObjectSchema, where: WorkflowDraftWhereInputObjectSchema.optional() }).strict();