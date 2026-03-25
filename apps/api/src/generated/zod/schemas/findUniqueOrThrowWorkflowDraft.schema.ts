import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './objects/WorkflowDraftWhereUniqueInput.schema';

export const WorkflowDraftFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkflowDraftFindUniqueOrThrowArgs> = z.object({   where: WorkflowDraftWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDraftFindUniqueOrThrowArgs>;

export const WorkflowDraftFindUniqueOrThrowZodSchema = z.object({   where: WorkflowDraftWhereUniqueInputObjectSchema }).strict();