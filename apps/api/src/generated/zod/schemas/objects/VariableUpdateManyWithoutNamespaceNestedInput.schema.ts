import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableCreateWithoutNamespaceInputObjectSchema as VariableCreateWithoutNamespaceInputObjectSchema } from './VariableCreateWithoutNamespaceInput.schema';
import { VariableUncheckedCreateWithoutNamespaceInputObjectSchema as VariableUncheckedCreateWithoutNamespaceInputObjectSchema } from './VariableUncheckedCreateWithoutNamespaceInput.schema';
import { VariableCreateOrConnectWithoutNamespaceInputObjectSchema as VariableCreateOrConnectWithoutNamespaceInputObjectSchema } from './VariableCreateOrConnectWithoutNamespaceInput.schema';
import { VariableUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema as VariableUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema } from './VariableUpsertWithWhereUniqueWithoutNamespaceInput.schema';
import { VariableCreateManyNamespaceInputEnvelopeObjectSchema as VariableCreateManyNamespaceInputEnvelopeObjectSchema } from './VariableCreateManyNamespaceInputEnvelope.schema';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './VariableWhereUniqueInput.schema';
import { VariableUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema as VariableUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema } from './VariableUpdateWithWhereUniqueWithoutNamespaceInput.schema';
import { VariableUpdateManyWithWhereWithoutNamespaceInputObjectSchema as VariableUpdateManyWithWhereWithoutNamespaceInputObjectSchema } from './VariableUpdateManyWithWhereWithoutNamespaceInput.schema';
import { VariableScalarWhereInputObjectSchema as VariableScalarWhereInputObjectSchema } from './VariableScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VariableCreateWithoutNamespaceInputObjectSchema), z.lazy(() => VariableCreateWithoutNamespaceInputObjectSchema).array(), z.lazy(() => VariableUncheckedCreateWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUncheckedCreateWithoutNamespaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VariableCreateOrConnectWithoutNamespaceInputObjectSchema), z.lazy(() => VariableCreateOrConnectWithoutNamespaceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VariableUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VariableCreateManyNamespaceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VariableWhereUniqueInputObjectSchema), z.lazy(() => VariableWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VariableWhereUniqueInputObjectSchema), z.lazy(() => VariableWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VariableWhereUniqueInputObjectSchema), z.lazy(() => VariableWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VariableWhereUniqueInputObjectSchema), z.lazy(() => VariableWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VariableUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VariableUpdateManyWithWhereWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUpdateManyWithWhereWithoutNamespaceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VariableScalarWhereInputObjectSchema), z.lazy(() => VariableScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VariableUpdateManyWithoutNamespaceNestedInputObjectSchema: z.ZodType<Prisma.VariableUpdateManyWithoutNamespaceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableUpdateManyWithoutNamespaceNestedInput>;
export const VariableUpdateManyWithoutNamespaceNestedInputObjectZodSchema = makeSchema();
