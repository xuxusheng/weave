import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './WorkflowDraftExecutionWhereUniqueInput.schema';
import { WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionCreateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInput>;
export const WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectZodSchema = makeSchema();
