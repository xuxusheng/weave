import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceUpdateWithoutSecretsInputObjectSchema as NamespaceUpdateWithoutSecretsInputObjectSchema } from './NamespaceUpdateWithoutSecretsInput.schema';
import { NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema as NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema } from './NamespaceUncheckedUpdateWithoutSecretsInput.schema';
import { NamespaceCreateWithoutSecretsInputObjectSchema as NamespaceCreateWithoutSecretsInputObjectSchema } from './NamespaceCreateWithoutSecretsInput.schema';
import { NamespaceUncheckedCreateWithoutSecretsInputObjectSchema as NamespaceUncheckedCreateWithoutSecretsInputObjectSchema } from './NamespaceUncheckedCreateWithoutSecretsInput.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => NamespaceUpdateWithoutSecretsInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema)]),
  create: z.union([z.lazy(() => NamespaceCreateWithoutSecretsInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutSecretsInputObjectSchema)]),
  where: z.lazy(() => NamespaceWhereInputObjectSchema).optional()
}).strict();
export const NamespaceUpsertWithoutSecretsInputObjectSchema: z.ZodType<Prisma.NamespaceUpsertWithoutSecretsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpsertWithoutSecretsInput>;
export const NamespaceUpsertWithoutSecretsInputObjectZodSchema = makeSchema();
