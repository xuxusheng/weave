import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  namespaceId: z.string(),
  flowId: z.string()
}).strict();
export const WorkflowNamespaceIdFlowIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WorkflowNamespaceIdFlowIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowNamespaceIdFlowIdCompoundUniqueInput>;
export const WorkflowNamespaceIdFlowIdCompoundUniqueInputObjectZodSchema = makeSchema();
