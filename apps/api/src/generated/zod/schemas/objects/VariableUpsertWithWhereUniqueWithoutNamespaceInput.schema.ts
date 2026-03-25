import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './VariableWhereUniqueInput.schema';
import { VariableUpdateWithoutNamespaceInputObjectSchema as VariableUpdateWithoutNamespaceInputObjectSchema } from './VariableUpdateWithoutNamespaceInput.schema';
import { VariableUncheckedUpdateWithoutNamespaceInputObjectSchema as VariableUncheckedUpdateWithoutNamespaceInputObjectSchema } from './VariableUncheckedUpdateWithoutNamespaceInput.schema';
import { VariableCreateWithoutNamespaceInputObjectSchema as VariableCreateWithoutNamespaceInputObjectSchema } from './VariableCreateWithoutNamespaceInput.schema';
import { VariableUncheckedCreateWithoutNamespaceInputObjectSchema as VariableUncheckedCreateWithoutNamespaceInputObjectSchema } from './VariableUncheckedCreateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VariableWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VariableUpdateWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUncheckedUpdateWithoutNamespaceInputObjectSchema)]),
  create: z.union([z.lazy(() => VariableCreateWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUncheckedCreateWithoutNamespaceInputObjectSchema)])
}).strict();
export const VariableUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.VariableUpsertWithWhereUniqueWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableUpsertWithWhereUniqueWithoutNamespaceInput>;
export const VariableUpsertWithWhereUniqueWithoutNamespaceInputObjectZodSchema = makeSchema();
