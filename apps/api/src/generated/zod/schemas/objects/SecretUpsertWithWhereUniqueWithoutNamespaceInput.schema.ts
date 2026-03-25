import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './SecretWhereUniqueInput.schema';
import { SecretUpdateWithoutNamespaceInputObjectSchema as SecretUpdateWithoutNamespaceInputObjectSchema } from './SecretUpdateWithoutNamespaceInput.schema';
import { SecretUncheckedUpdateWithoutNamespaceInputObjectSchema as SecretUncheckedUpdateWithoutNamespaceInputObjectSchema } from './SecretUncheckedUpdateWithoutNamespaceInput.schema';
import { SecretCreateWithoutNamespaceInputObjectSchema as SecretCreateWithoutNamespaceInputObjectSchema } from './SecretCreateWithoutNamespaceInput.schema';
import { SecretUncheckedCreateWithoutNamespaceInputObjectSchema as SecretUncheckedCreateWithoutNamespaceInputObjectSchema } from './SecretUncheckedCreateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SecretWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SecretUpdateWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUncheckedUpdateWithoutNamespaceInputObjectSchema)]),
  create: z.union([z.lazy(() => SecretCreateWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUncheckedCreateWithoutNamespaceInputObjectSchema)])
}).strict();
export const SecretUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.SecretUpsertWithWhereUniqueWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretUpsertWithWhereUniqueWithoutNamespaceInput>;
export const SecretUpsertWithWhereUniqueWithoutNamespaceInputObjectZodSchema = makeSchema();
