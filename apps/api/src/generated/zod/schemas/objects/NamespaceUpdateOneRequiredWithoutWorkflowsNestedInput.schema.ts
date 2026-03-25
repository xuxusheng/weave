import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceCreateWithoutWorkflowsInputObjectSchema as NamespaceCreateWithoutWorkflowsInputObjectSchema } from './NamespaceCreateWithoutWorkflowsInput.schema';
import { NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema as NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema } from './NamespaceUncheckedCreateWithoutWorkflowsInput.schema';
import { NamespaceCreateOrConnectWithoutWorkflowsInputObjectSchema as NamespaceCreateOrConnectWithoutWorkflowsInputObjectSchema } from './NamespaceCreateOrConnectWithoutWorkflowsInput.schema';
import { NamespaceUpsertWithoutWorkflowsInputObjectSchema as NamespaceUpsertWithoutWorkflowsInputObjectSchema } from './NamespaceUpsertWithoutWorkflowsInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema';
import { NamespaceUpdateToOneWithWhereWithoutWorkflowsInputObjectSchema as NamespaceUpdateToOneWithWhereWithoutWorkflowsInputObjectSchema } from './NamespaceUpdateToOneWithWhereWithoutWorkflowsInput.schema';
import { NamespaceUpdateWithoutWorkflowsInputObjectSchema as NamespaceUpdateWithoutWorkflowsInputObjectSchema } from './NamespaceUpdateWithoutWorkflowsInput.schema';
import { NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema as NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema } from './NamespaceUncheckedUpdateWithoutWorkflowsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NamespaceCreateWithoutWorkflowsInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NamespaceCreateOrConnectWithoutWorkflowsInputObjectSchema).optional(),
  upsert: z.lazy(() => NamespaceUpsertWithoutWorkflowsInputObjectSchema).optional(),
  connect: z.lazy(() => NamespaceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => NamespaceUpdateToOneWithWhereWithoutWorkflowsInputObjectSchema), z.lazy(() => NamespaceUpdateWithoutWorkflowsInputObjectSchema), z.lazy(() => NamespaceUncheckedUpdateWithoutWorkflowsInputObjectSchema)]).optional()
}).strict();
export const NamespaceUpdateOneRequiredWithoutWorkflowsNestedInputObjectSchema: z.ZodType<Prisma.NamespaceUpdateOneRequiredWithoutWorkflowsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpdateOneRequiredWithoutWorkflowsNestedInput>;
export const NamespaceUpdateOneRequiredWithoutWorkflowsNestedInputObjectZodSchema = makeSchema();
