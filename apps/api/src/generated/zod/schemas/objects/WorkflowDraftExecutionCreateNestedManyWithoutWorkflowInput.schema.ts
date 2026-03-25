import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionCreateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionCreateManyWorkflowInputEnvelopeObjectSchema as WorkflowDraftExecutionCreateManyWorkflowInputEnvelopeObjectSchema } from './WorkflowDraftExecutionCreateManyWorkflowInputEnvelope.schema';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './WorkflowDraftExecutionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema).array(), z.lazy(() => WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowDraftExecutionCreateManyWorkflowInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowDraftExecutionCreateNestedManyWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionCreateNestedManyWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionCreateNestedManyWithoutWorkflowInput>;
export const WorkflowDraftExecutionCreateNestedManyWithoutWorkflowInputObjectZodSchema = makeSchema();
