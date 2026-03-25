import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionCreateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionCreateManyWorkflowInputEnvelopeObjectSchema as WorkflowDraftExecutionCreateManyWorkflowInputEnvelopeObjectSchema } from './WorkflowDraftExecutionCreateManyWorkflowInputEnvelope.schema';
import { WorkflowDraftExecutionWhereUniqueInputObjectSchema as WorkflowDraftExecutionWhereUniqueInputObjectSchema } from './WorkflowDraftExecutionWhereUniqueInput.schema';
import { WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInputObjectSchema as WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInputObjectSchema } from './WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInput.schema';
import { WorkflowDraftExecutionScalarWhereInputObjectSchema as WorkflowDraftExecutionScalarWhereInputObjectSchema } from './WorkflowDraftExecutionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionCreateWithoutWorkflowInputObjectSchema).array(), z.lazy(() => WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUncheckedCreateWithoutWorkflowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionCreateOrConnectWithoutWorkflowInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowDraftExecutionCreateManyWorkflowInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftExecutionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftExecutionUpdateManyWithWhereWithoutWorkflowInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkflowDraftExecutionScalarWhereInputObjectSchema), z.lazy(() => WorkflowDraftExecutionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowNestedInput>;
export const WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowNestedInputObjectZodSchema = makeSchema();
