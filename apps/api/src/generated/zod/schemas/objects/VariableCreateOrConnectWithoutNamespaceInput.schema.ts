import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './VariableWhereUniqueInput.schema';
import { VariableCreateWithoutNamespaceInputObjectSchema as VariableCreateWithoutNamespaceInputObjectSchema } from './VariableCreateWithoutNamespaceInput.schema';
import { VariableUncheckedCreateWithoutNamespaceInputObjectSchema as VariableUncheckedCreateWithoutNamespaceInputObjectSchema } from './VariableUncheckedCreateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VariableWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VariableCreateWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUncheckedCreateWithoutNamespaceInputObjectSchema)])
}).strict();
export const VariableCreateOrConnectWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.VariableCreateOrConnectWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableCreateOrConnectWithoutNamespaceInput>;
export const VariableCreateOrConnectWithoutNamespaceInputObjectZodSchema = makeSchema();
