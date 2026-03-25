import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './SecretWhereUniqueInput.schema';
import { SecretCreateWithoutNamespaceInputObjectSchema as SecretCreateWithoutNamespaceInputObjectSchema } from './SecretCreateWithoutNamespaceInput.schema';
import { SecretUncheckedCreateWithoutNamespaceInputObjectSchema as SecretUncheckedCreateWithoutNamespaceInputObjectSchema } from './SecretUncheckedCreateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SecretWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SecretCreateWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUncheckedCreateWithoutNamespaceInputObjectSchema)])
}).strict();
export const SecretCreateOrConnectWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.SecretCreateOrConnectWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretCreateOrConnectWithoutNamespaceInput>;
export const SecretCreateOrConnectWithoutNamespaceInputObjectZodSchema = makeSchema();
