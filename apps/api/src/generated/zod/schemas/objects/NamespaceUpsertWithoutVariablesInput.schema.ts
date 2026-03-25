import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceUpdateWithoutVariablesInputObjectSchema as NamespaceUpdateWithoutVariablesInputObjectSchema } from './NamespaceUpdateWithoutVariablesInput.schema';
import { NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema as NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema } from './NamespaceUncheckedUpdateWithoutVariablesInput.schema';
import { NamespaceCreateWithoutVariablesInputObjectSchema as NamespaceCreateWithoutVariablesInputObjectSchema } from './NamespaceCreateWithoutVariablesInput.schema';
import { NamespaceUncheckedCreateWithoutVariablesInputObjectSchema as NamespaceUncheckedCreateWithoutVariablesInputObjectSchema } from './NamespaceUncheckedCreateWithoutVariablesInput.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => NamespaceUpdateWithoutVariablesInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema)]),
  create: z.union([z.lazy(() => NamespaceCreateWithoutVariablesInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutVariablesInputObjectSchema)]),
  where: z.lazy(() => NamespaceWhereInputObjectSchema).optional()
}).strict();
export const NamespaceUpsertWithoutVariablesInputObjectSchema: z.ZodType<Prisma.NamespaceUpsertWithoutVariablesInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpsertWithoutVariablesInput>;
export const NamespaceUpsertWithoutVariablesInputObjectZodSchema = makeSchema();
