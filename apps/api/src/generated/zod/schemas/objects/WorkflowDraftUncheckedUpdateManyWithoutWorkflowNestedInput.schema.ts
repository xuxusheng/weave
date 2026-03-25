import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowDraftCreateWithoutWorkflowInputObjectSchema as WorkflowDraftCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftCreateWithoutWorkflowInput.schema';
import { WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowDraftUncheckedCreateWithoutWorkflowInput.schema';
import { WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema as WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema } from './WorkflowDraftCreateOrConnectWithoutWorkflowInput.schema';
import { WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema as WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema } from './WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInput.schema';
import { WorkflowDraftCreateManyWorkflowInputEnvelopeObjectSchema as WorkflowDraftCreateManyWorkflowInputEnvelopeObjectSchema } from './WorkflowDraftCreateManyWorkflowInputEnvelope.schema';
import { WorkflowDraftWhereUniqueInputObjectSchema as WorkflowDraftWhereUniqueInputObjectSchema } from './WorkflowDraftWhereUniqueInput.schema';
import { WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema as WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema } from './WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInput.schema';
import { WorkflowDraftUpdateManyWithWhereWithoutWorkflowInputObjectSchema as WorkflowDraftUpdateManyWithWhereWithoutWorkflowInputObjectSchema } from './WorkflowDraftUpdateManyWithWhereWithoutWorkflowInput.schema';
import { WorkflowDraftScalarWhereInputObjectSchema as WorkflowDraftScalarWhereInputObjectSchema } from './WorkflowDraftScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowDraftCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftCreateWithoutWorkflowInputObjectSchema).array(), z.lazy(() => WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUncheckedCreateWithoutWorkflowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftCreateOrConnectWithoutWorkflowInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowDraftCreateManyWorkflowInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema), z.lazy(() => WorkflowDraftWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkflowDraftUpdateManyWithWhereWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowDraftUpdateManyWithWhereWithoutWorkflowInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkflowDraftScalarWhereInputObjectSchema), z.lazy(() => WorkflowDraftScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowDraftUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema: z.ZodType<Prisma.WorkflowDraftUncheckedUpdateManyWithoutWorkflowNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftUncheckedUpdateManyWithoutWorkflowNestedInput>;
export const WorkflowDraftUncheckedUpdateManyWithoutWorkflowNestedInputObjectZodSchema = makeSchema();
