import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowTriggerCreateWithoutWorkflowInputObjectSchema as WorkflowTriggerCreateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerCreateWithoutWorkflowInput.schema';
import { WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUncheckedCreateWithoutWorkflowInput.schema';
import { WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema as WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema } from './WorkflowTriggerCreateOrConnectWithoutWorkflowInput.schema';
import { WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema as WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInput.schema';
import { WorkflowTriggerCreateManyWorkflowInputEnvelopeObjectSchema as WorkflowTriggerCreateManyWorkflowInputEnvelopeObjectSchema } from './WorkflowTriggerCreateManyWorkflowInputEnvelope.schema';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './WorkflowTriggerWhereUniqueInput.schema';
import { WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema as WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInput.schema';
import { WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInputObjectSchema as WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInput.schema';
import { WorkflowTriggerScalarWhereInputObjectSchema as WorkflowTriggerScalarWhereInputObjectSchema } from './WorkflowTriggerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowTriggerCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerCreateWithoutWorkflowInputObjectSchema).array(), z.lazy(() => WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowTriggerCreateManyWorkflowInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema), z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema), z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema), z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema), z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkflowTriggerScalarWhereInputObjectSchema), z.lazy(() => WorkflowTriggerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowTriggerUpdateManyWithoutWorkflowNestedInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerUpdateManyWithoutWorkflowNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerUpdateManyWithoutWorkflowNestedInput>;
export const WorkflowTriggerUpdateManyWithoutWorkflowNestedInputObjectZodSchema = makeSchema();
