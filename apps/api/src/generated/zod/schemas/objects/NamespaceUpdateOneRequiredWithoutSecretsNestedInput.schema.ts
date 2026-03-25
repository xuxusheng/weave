import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceCreateWithoutSecretsInputObjectSchema as NamespaceCreateWithoutSecretsInputObjectSchema } from './NamespaceCreateWithoutSecretsInput.schema';
import { NamespaceUncheckedCreateWithoutSecretsInputObjectSchema as NamespaceUncheckedCreateWithoutSecretsInputObjectSchema } from './NamespaceUncheckedCreateWithoutSecretsInput.schema';
import { NamespaceCreateOrConnectWithoutSecretsInputObjectSchema as NamespaceCreateOrConnectWithoutSecretsInputObjectSchema } from './NamespaceCreateOrConnectWithoutSecretsInput.schema';
import { NamespaceUpsertWithoutSecretsInputObjectSchema as NamespaceUpsertWithoutSecretsInputObjectSchema } from './NamespaceUpsertWithoutSecretsInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema';
import { NamespaceUpdateToOneWithWhereWithoutSecretsInputObjectSchema as NamespaceUpdateToOneWithWhereWithoutSecretsInputObjectSchema } from './NamespaceUpdateToOneWithWhereWithoutSecretsInput.schema';
import { NamespaceUpdateWithoutSecretsInputObjectSchema as NamespaceUpdateWithoutSecretsInputObjectSchema } from './NamespaceUpdateWithoutSecretsInput.schema';
import { NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema as NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema } from './NamespaceUncheckedUpdateWithoutSecretsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NamespaceCreateWithoutSecretsInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutSecretsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NamespaceCreateOrConnectWithoutSecretsInputObjectSchema).optional(),
  upsert: z.lazy(() => NamespaceUpsertWithoutSecretsInputObjectSchema).optional(),
  connect: z.lazy(() => NamespaceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => NamespaceUpdateToOneWithWhereWithoutSecretsInputObjectSchema), z.lazy(() => NamespaceUpdateWithoutSecretsInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema)]).optional()
}).strict();
export const NamespaceUpdateOneRequiredWithoutSecretsNestedInputObjectSchema: z.ZodType<Prisma.NamespaceUpdateOneRequiredWithoutSecretsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpdateOneRequiredWithoutSecretsNestedInput>;
export const NamespaceUpdateOneRequiredWithoutSecretsNestedInputObjectZodSchema = makeSchema();
