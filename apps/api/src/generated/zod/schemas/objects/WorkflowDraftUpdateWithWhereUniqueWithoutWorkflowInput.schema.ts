import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './WorkflowDraftWhereUniqueInput.schema';
import { WorkflowDraftUpdateWithoutWorkflowInputObjectSchema as WorkflowDraftUpdateWithoutWorkflowInputObjectSchema } from './WorkflowDraftUpdateWithoutWorkflowInput.schema';
import { WorkflowDraftUncheckedUpdateWithoutWorkflowInputObjectSchema as WorkflowDraftUncheckedUpdateWithoutWorkflowInputObjectSchema } from './WorkflowDraftUncheckedUpdateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowDraftUpdateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUncheckedUpdateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInput>;
export const WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInputObjectZodSchema = makeSchema();
