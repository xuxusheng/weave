import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceWhereUniqueInputObjectSchema as NamespaceWhereUniqueInputObjectSchema } from './NamespaceWhereUniqueInput.schema';
import { NamespaceCreateWithoutWorkflowsInputObjectSchema as NamespaceCreateWithoutWorkflowsInputObjectSchema } from './NamespaceCreateWithoutWorkflowsInput.schema';
import { NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema as NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema } from './NamespaceUncheckedCreateWithoutWorkflowsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NamespaceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NamespaceCreateWithoutWorkflowsInputObjectSchema), z.lazy(() => NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema)])
}).strict();
export const NamespaceCreateOrConnectWithoutWorkflowsInputObjectSchema: z.ZodType<Prisma.NamespaceCreateOrConnectWithoutWorkflowsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateOrConnectWithoutWorkflowsInput>;
export const NamespaceCreateOrConnectWithoutWorkflowsInputObjectZodSchema = makeSchema();
