import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableScalarWhereInputObjectSchema as VariableScalarWhereInputObjectSchema } from './VariableScalarWhereInput.schema';
import { VariableUpdateManyMutationInputObjectSchema as VariableUpdateManyMutationInputObjectSchema } from './VariableUpdateManyMutationInput.schema';
import { VariableUncheckedUpdateManyWithoutNamespaceInputObjectSchema as VariableUncheckedUpdateManyWithoutNamespaceInputObjectSchema } from './VariableUncheckedUpdateManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VariableScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VariableUpdateManyMutationInputObjectSchema), z.lazy(() => VariableUncheckedUpdateManyWithoutNamespaceInputObjectSchema)])
}).strict();
export const VariableUpdateManyWithWhereWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.VariableUpdateManyWithWhereWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableUpdateManyWithWhereWithoutNamespaceInput>;
export const VariableUpdateManyWithWhereWithoutNamespaceInputObjectZodSchema = makeSchema();
