import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseWorkflowIdVersionCompoundUniqueInputObjectSchema as WorkflowReleaseWorkflowIdVersionCompoundUniqueInputObjectSchema } from './WorkflowReleaseWorkflowIdVersionCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  workflowId_version: z.lazy(() => WorkflowReleaseWorkflowIdVersionCompoundUniqueInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseWhereUniqueInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseWhereUniqueInput>;
export const WorkflowReleaseWhereUniqueInputObjectZodSchema = makeSchema();
