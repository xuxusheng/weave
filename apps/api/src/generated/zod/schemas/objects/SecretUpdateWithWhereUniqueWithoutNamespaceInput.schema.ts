import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretWhereUniqueInputObjectSchema as SecretWhereUniqueInputObjectSchema } from './SecretWhereUniqueInput.schema';
import { SecretUpdateWithoutNamespaceInputObjectSchema as SecretUpdateWithoutNamespaceInputObjectSchema } from './SecretUpdateWithoutNamespaceInput.schema';
import { SecretUncheckedUpdateWithoutNamespaceInputObjectSchema as SecretUncheckedUpdateWithoutNamespaceInputObjectSchema } from './SecretUncheckedUpdateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SecretWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SecretUpdateWithoutNamespaceInputObjectSchema), z.lazy(() => SecretUncheckedUpdateWithoutNamespaceInputObjectSchema)])
}).strict();
export const SecretUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.SecretUpdateWithWhereUniqueWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretUpdateWithWhereUniqueWithoutNamespaceInput>;
export const SecretUpdateWithWhereUniqueWithoutNamespaceInputObjectZodSchema = makeSchema();
