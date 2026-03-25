import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceCreateWithoutSecretsInputObjectSchema as NamespaceCreateWithoutSecretsInputObjectSchema } from './NamespaceCreateWithoutSecretsInput.schema';
import { NamespaceUncheckedCreateWithoutSecretsInputObjectSchema as NamespaceUncheckedCreateWithoutSecretsInputObjectSchema } from './NamespaceUncheckedCreateWithoutSecretsInput.schema';
import { NamespaceCreateOrConnectWithoutSecretsInputObjectSchema as NamespaceCreateOrConnectWithoutSecretsInputObjectSchema } from './NamespaceCreateOrConnectWithoutSecretsInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NamespaceCreateWithoutSecretsInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutSecretsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NamespaceCreateOrConnectWithoutSecretsInputObjectSchema).optional(),
  connect: z.lazy(() => NamespaceWhereUniqueInputObjectSchema).optional()
}).strict();
export const NamespaceCreateNestedOneWithoutSecretsInputObjectSchema: z.ZodType<Prisma.NamespaceCreateNestedOneWithoutSecretsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateNestedOneWithoutSecretsInput>;
export const NamespaceCreateNestedOneWithoutSecretsInputObjectZodSchema = makeSchema();
