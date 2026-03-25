import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const WorkflowTriggerWhereUniqueInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerWhereUniqueInput>;
export const WorkflowTriggerWhereUniqueInputObjectZodSchema = makeSchema();
