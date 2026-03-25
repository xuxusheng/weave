import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftExecutionScalarWhereInputObjectSchema as WorkflowDraftExecutionScalarWhereInputObjectSchema } from './WorkflowDraftExecutionScalarWhereInput.schema';
import { WorkflowDraftExecutionUpdateManyMutationInputObjectSchema as WorkflowDraftExecutionUpdateManyMutationInputObjectSchema } from './WorkflowDraftExecutionUpdateManyMutationInput.schema';
import { WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowDraftExecutionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowDraftExecutionUpdateManyMutationInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInput>;
export const WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInputObjectZodSchema = makeSchema();
