import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceCreateWithoutVariablesInputObjectSchema as NamespaceCreateWithoutVariablesInputObjectSchema } from './NamespaceCreateWithoutVariablesInput.schema';
import { NamespaceUncheckedCreateWithoutVariablesInputObjectSchema as NamespaceUncheckedCreateWithoutVariablesInputObjectSchema } from './NamespaceUncheckedCreateWithoutVariablesInput.schema';
import { NamespaceCreateOrConnectWithoutVariablesInputObjectSchema as NamespaceCreateOrConnectWithoutVariablesInputObjectSchema } from './NamespaceCreateOrConnectWithoutVariablesInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NamespaceCreateWithoutVariablesInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutVariablesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NamespaceCreateOrConnectWithoutVariablesInputObjectSchema).optional(),
  connect: z.lazy(() => NamespaceWhereUniqueInputObjectSchema).optional()
}).strict();
export const NamespaceCreateNestedOneWithoutVariablesInputObjectSchema: z.ZodType<Prisma.NamespaceCreateNestedOneWithoutVariablesInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateNestedOneWithoutVariablesInput>;
export const NamespaceCreateNestedOneWithoutVariablesInputObjectZodSchema = makeSchema();
