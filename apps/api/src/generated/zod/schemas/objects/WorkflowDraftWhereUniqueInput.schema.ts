import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const WorkflowDraftWhereUniqueInputObjectSchema: z.ZodType<Prisma.WorkflowDraftWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftWhereUniqueInput>;
export const WorkflowDraftWhereUniqueInputObjectZodSchema = makeSchema();
