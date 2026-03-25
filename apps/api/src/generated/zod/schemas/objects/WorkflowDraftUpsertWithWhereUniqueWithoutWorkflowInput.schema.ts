import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './WorkflowDraftWhereUniqueInput.schema';
import { WorkflowDraftUpdateWithoutWorkflowInputObjectSchema as WorkflowDraftUpdateWithoutWorkflowInputObjectSchema } from './WorkflowDraftUpdateWithoutWorkflowInput.schema';
import { WorkflowDraftUncheckedUpdateWithoutWorkflowInputObjectSchema as WorkflowDraftUncheckedUpdateWithoutWorkflowInputObjectSchema } from './WorkflowDraftUncheckedUpdateWithoutWorkflowInput.schema';
import { WorkflowDraftCreateWithoutWorkflowInputObjectSchema as WorkflowDraftCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftCreateWithoutWorkflowInput.schema';
import { WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftUncheckedCreateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkflowDraftUpdateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUncheckedUpdateWithoutWorkflowInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowDraftCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInput>;
export const WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInputObjectZodSchema = makeSchema();
