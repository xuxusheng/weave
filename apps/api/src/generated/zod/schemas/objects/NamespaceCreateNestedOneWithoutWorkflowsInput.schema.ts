import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceCreateWithoutWorkflowsInputObjectSchema as NamespaceCreateWithoutWorkflowsInputObjectSchema } from './NamespaceCreateWithoutWorkflowsInput.schema';
import { NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema as NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema } from './NamespaceUncheckedCreateWithoutWorkflowsInput.schema';
import { NamespaceCreateOrConnectWithoutWorkflowsInputObjectSchema as NamespaceCreateOrConnectWithoutWorkflowsInputObjectSchema } from './NamespaceCreateOrConnectWithoutWorkflowsInput.schema';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NamespaceCreateWithoutWorkflowsInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NamespaceCreateOrConnectWithoutWorkflowsInputObjectSchema).optional(),
  connect: z.lazy(() => NamespaceWhereUniqueInputObjectSchema).optional()
}).strict();
export const NamespaceCreateNestedOneWithoutWorkflowsInputObjectSchema: z.ZodType<Prisma.NamespaceCreateNestedOneWithoutWorkflowsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateNestedOneWithoutWorkflowsInput>;
export const NamespaceCreateNestedOneWithoutWorkflowsInputObjectZodSchema = makeSchema();
