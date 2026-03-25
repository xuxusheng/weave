import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema';
import { NamespaceUpdateWithoutSecretsInputObjectSchema as NamespaceUpdateWithoutSecretsInputObjectSchema } from './NamespaceUpdateWithoutSecretsInput.schema';
import { NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema as NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema } from './NamespaceUncheckedUpdateWithoutSecretsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NamespaceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => NamespaceUpdateWithoutSecretsInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema)])
}).strict();
export const NamespaceUpdateToOneWithWhereWithoutSecretsInputObjectSchema: z.ZodType<Prisma.NamespaceUpdateToOneWithWhereWithoutSecretsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpdateToOneWithWhereWithoutSecretsInput>;
export const NamespaceUpdateToOneWithWhereWithoutSecretsInputObjectZodSchema = makeSchema();
