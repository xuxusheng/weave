import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableCreateWithoutNamespaceInputObjectSchema as VariableCreateWithoutNamespaceInputObjectSchema } from './VariableCreateWithoutNamespaceInput.schema';
import { VariableUncheckedCreateWithoutNamespaceInputObjectSchema as VariableUncheckedCreateWithoutNamespaceInputObjectSchema } from './VariableUncheckedCreateWithoutNamespaceInput.schema';
import { VariableCreateOrConnectWithoutNamespaceInputObjectSchema as VariableCreateOrConnectWithoutNamespaceInputObjectSchema } from './VariableCreateOrConnectWithoutNamespaceInput.schema';
import { VariableCreateManyNamespaceInputEnvelopeObjectSchema as VariableCreateManyNamespaceInputEnvelopeObjectSchema } from './VariableCreateManyNamespaceInputEnvelope.schema';
import { VariableWhereUniqueInputObjectSchema as VariableWhereUniqueInputObjectSchema } from './VariableWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VariableCreateWithoutNamespaceInputObjectSchema), z.lazy(() => VariableCreateWithoutNamespaceInputObjectSchema).array(), z.lazy(() => VariableUncheckedCreateWithoutNamespaceInputObjectSchema), z.lazy(() => VariableUncheckedCreateWithoutNamespaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VariableCreateOrConnectWithoutNamespaceInputObjectSchema), z.lazy(() => VariableCreateOrConnectWithoutNamespaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VariableCreateManyNamespaceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VariableWhereUniqueInputObjectSchema), z.lazy(() => VariableWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.VariableUncheckedCreateNestedManyWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableUncheckedCreateNestedManyWithoutNamespaceInput>;
export const VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectZodSchema = makeSchema();
