import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowCreateWithoutNamespaceInputObjectSchema as WorkflowCreateWithoutNamespaceInputObjectSchema } from './WorkflowCreateWithoutNamespaceInput.schema';
import { WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema as WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedCreateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowCreateWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema)])
}).strict();
export const WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.WorkflowCreateOrConnectWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateOrConnectWithoutNamespaceInput>;
export const WorkflowCreateOrConnectWithoutNamespaceInputObjectZodSchema = makeSchema();
