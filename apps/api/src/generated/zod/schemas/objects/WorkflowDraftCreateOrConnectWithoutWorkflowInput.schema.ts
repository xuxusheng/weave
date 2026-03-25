import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './WorkflowDraftWhereUniqueInput.schema';
import { WorkflowDraftCreateWithoutWorkflowInputObjectSchema as WorkflowDraftCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftCreateWithoutWorkflowInput.schema';
import { WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftUncheckedCreateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowDraftCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftCreateOrConnectWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftCreateOrConnectWithoutWorkflowInput>;
export const WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectZodSchema = makeSchema();
