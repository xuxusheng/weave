import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './WorkflowDraftExecutionWhereUniqueInput.schema';
import { WorkflowDraftExecutionUpdateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUpdateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUpdateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUncheckedUpdateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUncheckedUpdateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUncheckedUpdateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionCreateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkflowDraftExecutionUpdateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUncheckedUpdateWithoutWorkflowInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInput>;
export const WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInputObjectZodSchema = makeSchema();
