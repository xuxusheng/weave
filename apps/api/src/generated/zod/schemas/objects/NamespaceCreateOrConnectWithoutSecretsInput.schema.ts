import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema';
import { NamespaceCreateWithoutSecretsInputObjectSchema as NamespaceCreateWithoutSecretsInputObjectSchema } from './NamespaceCreateWithoutSecretsInput.schema';
import { NamespaceUncheckedCreateWithoutSecretsInputObjectSchema as NamespaceUncheckedCreateWithoutSecretsInputObjectSchema } from './NamespaceUncheckedCreateWithoutSecretsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NamespaceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NamespaceCreateWithoutSecretsInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutSecretsInputObjectSchema)])
}).strict();
export const NamespaceCreateOrConnectWithoutSecretsInputObjectSchema: z.ZodType<Prisma.NamespaceCreateOrConnectWithoutSecretsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateOrConnectWithoutSecretsInput>;
export const NamespaceCreateOrConnectWithoutSecretsInputObjectZodSchema = makeSchema();
