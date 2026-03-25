import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretCreateWithoutNamespaceInputObjectSchema as SecretCreateWithoutNamespaceInputObjectSchema } from './SecretCreateWithoutNamespaceInput.schema';
import { SecretUncheckedCreateWithoutNamespaceInputObjectSchema as SecretUncheckedCreateWithoutNamespaceInputObjectSchema } from './SecretUncheckedCreateWithoutNamespaceInput.schema';
import { SecretCreateOrConnectWithoutNamespaceInputObjectSchema as SecretCreateOrConnectWithoutNamespaceInputObjectSchema } from './SecretCreateOrConnectWithoutNamespaceInput.schema';
import { SecretUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema as SecretUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema } from './SecretUpsertWithWhereUniqueWithoutNamespaceInput.schema';
import { SecretCreateManyNamespaceInputEnvelopeObjectSchema as SecretCreateManyNamespaceInputEnvelopeObjectSchema } from './SecretCreateManyNamespaceInputEnvelope.schema';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './SecretWhereUniqueInput.schema';
import { SecretUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema as SecretUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema } from './SecretUpdateWithWhereUniqueWithoutNamespaceInput.schema';
import { SecretUpdateManyWithWhereWithoutNamespaceInputObjectSchema as SecretUpdateManyWithWhereWithoutNamespaceInputObjectSchema } from './SecretUpdateManyWithWhereWithoutNamespaceInput.schema';
import { SecretScalarWhereInputObjectSchema as SecretScalarWhereInputObjectSchema } from './SecretScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SecretCreateWithoutNamespaceInputObjectSchema), z.lazy(() => SecretCreateWithoutNamespaceInputObjectSchema).array(), z.lazy(() => SecretUncheckedCreateWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUncheckedCreateWithoutNamespaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SecretCreateOrConnectWithoutNamespaceInputObjectSchema), z.lazy(() => SecretCreateOrConnectWithoutNamespaceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SecretUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SecretCreateManyNamespaceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SecretWhereUniqueInputObjectSchema), z.lazy(() => SecretWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SecretWhereUniqueInputObjectSchema), z.lazy(() => SecretWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SecretWhereUniqueInputObjectSchema), z.lazy(() => SecretWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SecretWhereUniqueInputObjectSchema), z.lazy(() => SecretWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SecretUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SecretUpdateManyWithWhereWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUpdateManyWithWhereWithoutNamespaceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SecretScalarWhereInputObjectSchema), z.lazy(() => SecretScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SecretUncheckedUpdateManyWithoutNamespaceNestedInputObjectSchema: z.ZodType<Prisma.SecretUncheckedUpdateManyWithoutNamespaceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretUncheckedUpdateManyWithoutNamespaceNestedInput>;
export const SecretUncheckedUpdateManyWithoutNamespaceNestedInputObjectZodSchema = makeSchema();
