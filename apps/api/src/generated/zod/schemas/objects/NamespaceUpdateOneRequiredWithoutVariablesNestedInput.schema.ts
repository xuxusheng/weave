import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceCreateWithoutVariablesInputObjectSchema as NamespaceCreateWithoutVariablesInputObjectSchema } from './NamespaceCreateWithoutVariablesInput.schema';
import { NamespaceUncheckedCreateWithoutVariablesInputObjectSchema as NamespaceUncheckedCreateWithoutVariablesInputObjectSchema } from './NamespaceUncheckedCreateWithoutVariablesInput.schema';
import { NamespaceCreateOrConnectWithoutVariablesInputObjectSchema as NamespaceCreateOrConnectWithoutVariablesInputObjectSchema } from './NamespaceCreateOrConnectWithoutVariablesInput.schema';
import { NamespaceUpsertWithoutVariablesInputObjectSchema as NamespaceUpsertWithoutVariablesInputObjectSchema } from './NamespaceUpsertWithoutVariablesInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema';
import { NamespaceUpdateToOneWithWhereWithoutVariablesInputObjectSchema as NamespaceUpdateToOneWithWhereWithoutVariablesInputObjectSchema } from './NamespaceUpdateToOneWithWhereWithoutVariablesInput.schema';
import { NamespaceUpdateWithoutVariablesInputObjectSchema as NamespaceUpdateWithoutVariablesInputObjectSchema } from './NamespaceUpdateWithoutVariablesInput.schema';
import { NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema as NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema } from './NamespaceUncheckedUpdateWithoutVariablesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NamespaceCreateWithoutVariablesInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutVariablesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NamespaceCreateOrConnectWithoutVariablesInputObjectSchema).optional(),
  upsert: z.lazy(() => NamespaceUpsertWithoutVariablesInputObjectSchema).optional(),
  connect: z.lazy(() => NamespaceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => NamespaceUpdateToOneWithWhereWithoutVariablesInputObjectSchema), z.lazy(() => NamespaceUpdateWithoutVariablesInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema)]).optional()
}).strict();
export const NamespaceUpdateOneRequiredWithoutVariablesNestedInputObjectSchema: z.ZodType<Prisma.NamespaceUpdateOneRequiredWithoutVariablesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpdateOneRequiredWithoutVariablesNestedInput>;
export const NamespaceUpdateOneRequiredWithoutVariablesNestedInputObjectZodSchema = makeSchema();
