import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './WorkflowDraftExecutionWhereUniqueInput.schema';
import { WorkflowDraftExecutionUpdateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUpdateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUpdateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUncheckedUpdateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUncheckedUpdateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUncheckedUpdateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowDraftExecutionUpdateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUncheckedUpdateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInput>;
export const WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInputObjectZodSchema = makeSchema();
