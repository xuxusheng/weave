import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema';
import { NamespaceUpdateWithoutVariablesInputObjectSchema as NamespaceUpdateWithoutVariablesInputObjectSchema } from './NamespaceUpdateWithoutVariablesInput.schema';
import { NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema as NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema } from './NamespaceUncheckedUpdateWithoutVariablesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NamespaceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => NamespaceUpdateWithoutVariablesInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutVariablesInputObjectSchema)])
}).strict();
export const NamespaceUpdateToOneWithWhereWithoutVariablesInputObjectSchema: z.ZodType<Prisma.NamespaceUpdateToOneWithWhereWithoutVariablesInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpdateToOneWithWhereWithoutVariablesInput>;
export const NamespaceUpdateToOneWithWhereWithoutVariablesInputObjectZodSchema = makeSchema();
