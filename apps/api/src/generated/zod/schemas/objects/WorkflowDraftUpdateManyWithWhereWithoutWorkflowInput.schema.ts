import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftScalarWhereInputObjectSchema as WorkflowDraftScalarWhereInputObjectSchema } from './WorkflowDraftScalarWhereInput.schema';
import { WorkflowDraftUpdateManyMutationInputObjectSchema as WorkflowDraftUpdateManyMutationInputObjectSchema } from './WorkflowDraftUpdateManyMutationInput.schema';
import { WorkflowDraftUncheckedUpdateManyWithoutWorkflowInputObjectSchema as WorkflowDraftUncheckedUpdateManyWithoutWorkflowInputObjectSchema } from './WorkflowDraftUncheckedUpdateManyWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowDraftScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowDraftUpdateManyMutationInputObjectSchema), z.lazy(() => WorkflowDraftUncheckedUpdateManyWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowDraftUpdateManyWithWhereWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftUpdateManyWithWhereWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftUpdateManyWithWhereWithoutWorkflowInput>;
export const WorkflowDraftUpdateManyWithWhereWithoutWorkflowInputObjectZodSchema = makeSchema();
