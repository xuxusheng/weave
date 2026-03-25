import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './VariableWhereUniqueInput.schema';
import { VariableUpdateWithoutNamespaceInputObjectSchema as VariableUpdateWithoutNamespaceInputObjectSchema } from './VariableUpdateWithoutNamespaceInput.schema';
import { VariableUncheckedUpdateWithoutNamespaceInputObjectSchema as VariableUncheckedUpdateWithoutNamespaceInputObjectSchema } from './VariableUncheckedUpdateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VariableWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VariableUpdateWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUncheckedUpdateWithoutNamespaceInputObjectSchema)])
}).strict();
export const VariableUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.VariableUpdateWithWhereUniqueWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableUpdateWithWhereUniqueWithoutNamespaceInput>;
export const VariableUpdateWithWhereUniqueWithoutNamespaceInputObjectZodSchema = makeSchema();
