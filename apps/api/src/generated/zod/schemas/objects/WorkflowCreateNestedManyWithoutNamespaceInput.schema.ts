import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutNamespaceInputObjectSchema as WorkflowCreateWithoutNamespaceInputObjectSchema } from './WorkflowCreateWithoutNamespaceInput.schema';
import { WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema as WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedCreateWithoutNamespaceInput.schema';
import { WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema as WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema } from './WorkflowCreateOrConnectWithoutNamespaceInput.schema';
import { WorkflowCreateManyNamespaceInputEnvelopeObjectSchema as WorkflowCreateManyNamespaceInputEnvelopeObjectSchema } from './WorkflowCreateManyNamespaceInputEnvelope.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowCreateWithoutNamespaceInputObjectSchema).array(), z.lazy(() => WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowCreateOrConnectWithoutNamespaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowCreateManyNamespaceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkflowWhereUniqueInputObjectSchema), z.lazy(() => WorkflowWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.WorkflowCreateNestedManyWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateNestedManyWithoutNamespaceInput>;
export const WorkflowCreateNestedManyWithoutNamespaceInputObjectZodSchema = makeSchema();
