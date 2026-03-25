import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema';
import { NamespaceUpdateWithoutWorkflowsInputObjectSchema as NamespaceUpdateWithoutWorkflowsInputObjectSchema } from './NamespaceUpdateWithoutWorkflowsInput.schema';
import { NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema as NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema } from './NamespaceUncheckedUpdateWithoutWorkflowsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NamespaceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => NamespaceUpdateWithoutWorkflowsInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema)])
}).strict();
export const NamespaceUpdateToOneWithWhereWithoutWorkflowsInputObjectSchema: z.ZodType<Prisma.NamespaceUpdateToOneWithWhereWithoutWorkflowsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpdateToOneWithWhereWithoutWorkflowsInput>;
export const NamespaceUpdateToOneWithWhereWithoutWorkflowsInputObjectZodSchema = makeSchema();
