import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutNamespaceInputObjectSchema as WorkflowCreateWithoutNamespaceInputObjectSchema } from './WorkflowCreateWithoutNamespaceInput.schema';
import { WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema as WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedCreateWithoutNamespaceInput.schema';
import { WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema as WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema } from './WorkflowCreateOrConnectWithoutNamespaceInput.schema';
import { WorkflowUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema as WorkflowUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema } from './WorkflowUpsertWithWhereUniqueWithoutNamespaceInput.schema';
import { WorkflowCreateManyNamespaceInputEnvelopeObjectSchema as WorkflowCreateManyNamespaceInputEnvelopeObjectSchema } from './WorkflowCreateManyNamespaceInputEnvelope.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema as WorkflowUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema } from './WorkflowUpdateWithWhereUniqueWithoutNamespaceInput.schema';
import { WorkflowUpdateManyWithWhereWithoutNamespaceInputObjectSchema as WorkflowUpdateManyWithWhereWithoutNamespaceInputObjectSchema } from './WorkflowUpdateManyWithWhereWithoutNamespaceInput.schema';
import { WorkflowScalarWhereInputObjectSchema as WorkflowScalarWhereInputObjectSchema } from './WorkflowScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowCreateWithoutNamespaceInputObjectSchema).array(), z.lazy(() => WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkflowUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowCreateManyNamespaceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkflowWhereUniqueInputObjectSchema), z.lazy(() => WorkflowWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkflowWhereUniqueInputObjectSchema), z.lazy(() => WorkflowWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkflowWhereUniqueInputObjectSchema), z.lazy(() => WorkflowWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkflowWhereUniqueInputObjectSchema), z.lazy(() => WorkflowWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkflowUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkflowUpdateManyWithWhereWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUpdateManyWithWhereWithoutNamespaceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkflowScalarWhereInputObjectSchema), z.lazy(() => WorkflowScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowUpdateManyWithoutNamespaceNestedInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateManyWithoutNamespaceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateManyWithoutNamespaceNestedInput>;
export const WorkflowUpdateManyWithoutNamespaceNestedInputObjectZodSchema = makeSchema();
