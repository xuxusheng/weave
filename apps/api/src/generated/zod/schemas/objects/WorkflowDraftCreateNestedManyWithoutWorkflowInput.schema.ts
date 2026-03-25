import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftCreateWithoutWorkflowInputObjectSchema as WorkflowDraftCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftCreateWithoutWorkflowInput.schema';
import { WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftUncheckedCreateWithoutWorkflowInput.schema';
import { WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema as WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema } from './WorkflowDraftCreateOrConnectWithoutWorkflowInput.schema';
import { WorkflowDraftCreateManyWorkflowInputEnvelopeObjectSchema as WorkflowDraftCreateManyWorkflowInputEnvelopeObjectSchema } from './WorkflowDraftCreateManyWorkflowInputEnvelope.schema';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './WorkflowDraftWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowDraftCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftCreateWithoutWorkflowInputObjectSchema).array(), z.lazy(() => WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowDraftCreateManyWorkflowInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowDraftCreateNestedManyWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftCreateNestedManyWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftCreateNestedManyWithoutWorkflowInput>;
export const WorkflowDraftCreateNestedManyWithoutWorkflowInputObjectZodSchema = makeSchema();
