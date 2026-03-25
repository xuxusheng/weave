import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './objects/WorkflowDraftWhereUniqueInput.schema';

export const WorkflowDraftDeleteOneSchema: z.ZodType<Prisma.WorkflowDraftDeleteArgs> = z.object({   where: WorkflowDraftWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftDeleteArgs>;

export const WorkflowDraftDeleteOneZodSchema = z.object({   where: WorkflowDraftWhereUniqueInputObjectSchema }).strict();