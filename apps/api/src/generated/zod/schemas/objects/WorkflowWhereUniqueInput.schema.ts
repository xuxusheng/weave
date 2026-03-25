import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowNamespaceIdFlowIdCompoundUniqueInputObjectSchema as WorkflowNamespaceIdFlowIdCompoundUniqueInputObjectSchema } from './WorkflowNamespaceIdFlowIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  namespaceId_flowId: z.lazy(() => WorkflowNamespaceIdFlowIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const WorkflowWhereUniqueInputObjectSchema: z.ZodType<Prisma.WorkflowWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowWhereUniqueInput>;
export const WorkflowWhereUniqueInputObjectZodSchema = makeSchema();
