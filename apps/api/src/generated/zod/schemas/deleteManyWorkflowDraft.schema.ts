import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftWhereInputObjectSchema as WorkflowDraftWhereInputObjectSchema } from './objects/WorkflowDraftWhereInput.schema';

export const WorkflowDraftDeleteManySchema: z.ZodType<Prisma.WorkflowDraftDeleteManyArgs> = z.object({ where: WorkflowDraftWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftDeleteManyArgs>;

export const WorkflowDraftDeleteManyZodSchema = z.object({ where: WorkflowDraftWhereInputObjectSchema.optional() }).strict();