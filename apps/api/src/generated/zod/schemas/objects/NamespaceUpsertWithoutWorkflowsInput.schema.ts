import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceUpdateWithoutWorkflowsInputObjectSchema as NamespaceUpdateWithoutWorkflowsInputObjectSchema } from './NamespaceUpdateWithoutWorkflowsInput.schema';
import { NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema as NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema } from './NamespaceUncheckedUpdateWithoutWorkflowsInput.schema';
import { NamespaceCreateWithoutWorkflowsInputObjectSchema as NamespaceCreateWithoutWorkflowsInputObjectSchema } from './NamespaceCreateWithoutWorkflowsInput.schema';
import { NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema as NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema } from './NamespaceUncheckedCreateWithoutWorkflowsInput.schema';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => NamespaceUpdateWithoutWorkflowsInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema)]),
  create: z.union([z.lazy(() => NamespaceCreateWithoutWorkflowsInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema)]),
  where: z.lazy(() => NamespaceWhereInputObjectSchema).optional()
}).strict();
export const NamespaceUpsertWithoutWorkflowsInputObjectSchema: z.ZodType<Prisma.NamespaceUpsertWithoutWorkflowsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpsertWithoutWorkflowsInput>;
export const NamespaceUpsertWithoutWorkflowsInputObjectZodSchema = makeSchema();
