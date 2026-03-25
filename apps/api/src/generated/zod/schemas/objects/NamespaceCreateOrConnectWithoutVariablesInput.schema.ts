import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema';
import { NamespaceCreateWithoutVariablesInputObjectSchema as NamespaceCreateWithoutVariablesInputObjectSchema } from './NamespaceCreateWithoutVariablesInput.schema';
import { NamespaceUncheckedCreateWithoutVariablesInputObjectSchema as NamespaceUncheckedCreateWithoutVariablesInputObjectSchema } from './NamespaceUncheckedCreateWithoutVariablesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NamespaceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NamespaceCreateWithoutVariablesInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutVariablesInputObjectSchema)])
}).strict();
export const NamespaceCreateOrConnectWithoutVariablesInputObjectSchema: z.ZodType<Prisma.NamespaceCreateOrConnectWithoutVariablesInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateOrConnectWithoutVariablesInput>;
export const NamespaceCreateOrConnectWithoutVariablesInputObjectZodSchema = makeSchema();
