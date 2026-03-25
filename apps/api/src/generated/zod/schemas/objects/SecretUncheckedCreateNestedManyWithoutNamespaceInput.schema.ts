import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretCreateWithoutNamespaceInputObjectSchema as SecretCreateWithoutNamespaceInputObjectSchema } from './SecretCreateWithoutNamespaceInput.schema';
import { SecretUncheckedCreateWithoutNamespaceInputObjectSchema as SecretUncheckedCreateWithoutNamespaceInputObjectSchema } from './SecretUncheckedCreateWithoutNamespaceInput.schema';
import { SecretCreateOrConnectWithoutNamespaceInputObjectSchema as SecretCreateOrConnectWithoutNamespaceInputObjectSchema } from './SecretCreateOrConnectWithoutNamespaceInput.schema';
import { SecretCreateManyNamespaceInputEnvelopeObjectSchema as SecretCreateManyNamespaceInputEnvelopeObjectSchema } from './SecretCreateManyNamespaceInputEnvelope.schema';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './SecretWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SecretCreateWithoutNamespaceInputObjectSchema), z.lazy(() => SecretCreateWithoutNamespaceInputObjectSchema).array(), z.lazy(() => SecretUncheckedCreateWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUncheckedCreateWithoutNamespaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SecretCreateOrConnectWithoutNamespaceInputObjectSchema), z.lazy(() => SecretCreateOrConnectWithoutNamespaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SecretCreateManyNamespaceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SecretWhereUniqueInputObjectSchema), z.lazy(() => SecretWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.SecretUncheckedCreateNestedManyWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretUncheckedCreateNestedManyWithoutNamespaceInput>;
export const SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectZodSchema = makeSchema();
