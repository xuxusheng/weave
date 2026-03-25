import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseCreateWithoutWorkflowInputObjectSchema as WorkflowReleaseCreateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseCreateWithoutWorkflowInput.schema';
import { WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUncheckedCreateWithoutWorkflowInput.schema';
import { WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema as WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema } from './WorkflowReleaseCreateOrConnectWithoutWorkflowInput.schema';
import { WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema as WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInput.schema';
import { WorkflowReleaseCreateManyWorkflowInputEnvelopeObjectSchema as WorkflowReleaseCreateManyWorkflowInputEnvelopeObjectSchema } from './WorkflowReleaseCreateManyWorkflowInputEnvelope.schema';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './WorkflowReleaseWhereUniqueInput.schema';
import { WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema as WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInput.schema';
import { WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInputObjectSchema as WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInput.schema';
import { WorkflowReleaseScalarWhereInputObjectSchema as WorkflowReleaseScalarWhereInputObjectSchema } from './WorkflowReleaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowReleaseCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseCreateWithoutWorkflowInputObjectSchema).array(), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowReleaseCreateManyWorkflowInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema), z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema), z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema), z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema), z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkflowReleaseScalarWhereInputObjectSchema), z.lazy(() => WorkflowReleaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowReleaseUpdateManyWithoutWorkflowNestedInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUpdateManyWithoutWorkflowNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateManyWithoutWorkflowNestedInput>;
export const WorkflowReleaseUpdateManyWithoutWorkflowNestedInputObjectZodSchema = makeSchema();
