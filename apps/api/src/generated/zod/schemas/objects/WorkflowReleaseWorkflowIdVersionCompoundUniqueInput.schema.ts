import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  workflowId: z.string(),
  version: z.number().int()
}).strict();
export const WorkflowReleaseWorkflowIdVersionCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseWorkflowIdVersionCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseWorkflowIdVersionCompoundUniqueInput>;
export const WorkflowReleaseWorkflowIdVersionCompoundUniqueInputObjectZodSchema = makeSchema();
