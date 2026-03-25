import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowExecutionCreateWithoutReleaseInputObjectSchema as WorkflowExecutionCreateWithoutReleaseInputObjectSchema } from './WorkflowExecutionCreateWithoutReleaseInput.schema';
import { WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema as WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema } from './WorkflowExecutionUncheckedCreateWithoutReleaseInput.schema';
import { WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema as WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema } from './WorkflowExecutionCreateOrConnectWithoutReleaseInput.schema';
import { WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInputObjectSchema as WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInputObjectSchema } from './WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInput.schema';
import { WorkflowExecutionCreateManyReleaseInputEnvelopeObjectSchema as WorkflowExecutionCreateManyReleaseInputEnvelopeObjectSchema } from './WorkflowExecutionCreateManyReleaseInputEnvelope.schema';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './WorkflowExecutionWhereUniqueInput.schema';
import { WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInputObjectSchema as WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInputObjectSchema } from './WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInput.schema';
import { WorkflowExecutionUpdateManyWithWhereWithoutReleaseInputObjectSchema as WorkflowExecutionUpdateManyWithWhereWithoutReleaseInputObjectSchema } from './WorkflowExecutionUpdateManyWithWhereWithoutReleaseInput.schema';
import { WorkflowExecutionScalarWhereInputObjectSchema as WorkflowExecutionScalarWhereInputObjectSchema } from './WorkflowExecutionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowExecutionCreateWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionCreateWithoutReleaseInputObjectSchema).array(), z.lazy(() => WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowExecutionCreateManyReleaseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkflowExecutionUpdateManyWithWhereWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUpdateManyWithWhereWithoutReleaseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkflowExecutionScalarWhereInputObjectSchema), z.lazy(() => WorkflowExecutionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowExecutionUpdateManyWithoutReleaseNestedInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionUpdateManyWithoutReleaseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionUpdateManyWithoutReleaseNestedInput>;
export const WorkflowExecutionUpdateManyWithoutReleaseNestedInputObjectZodSchema = makeSchema();
