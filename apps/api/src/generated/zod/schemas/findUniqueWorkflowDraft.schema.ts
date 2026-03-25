import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './objects/WorkflowDraftWhereUniqueInput.schema';

export const WorkflowDraftFindUniqueSchema: z.ZodType<Prisma.WorkflowDraftFindUniqueArgs> = z.object({   where: WorkflowDraftWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftFindUniqueArgs>;

export const WorkflowDraftFindUniqueZodSchema = z.object({   where: WorkflowDraftWhereUniqueInputObjectSchema }).strict();