import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowTriggerCreateWithoutWorkflowInputObjectSchema as WorkflowTriggerCreateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerCreateWithoutWorkflowInput.schema';
import { WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUncheckedCreateWithoutWorkflowInput.schema';
import { WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema as WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema } from './WorkflowTriggerCreateOrConnectWithoutWorkflowInput.schema';
import { WorkflowTriggerCreateManyWorkflowInputEnvelopeObjectSchema as WorkflowTriggerCreateManyWorkflowInputEnvelopeObjectSchema } from './WorkflowTriggerCreateManyWorkflowInputEnvelope.schema';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './WorkflowTriggerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowTriggerCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerCreateWithoutWorkflowInputObjectSchema).array(), z.lazy(() => WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowTriggerCreateManyWorkflowInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema), z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowTriggerUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerUncheckedCreateNestedManyWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerUncheckedCreateNestedManyWithoutWorkflowInput>;
export const WorkflowTriggerUncheckedCreateNestedManyWithoutWorkflowInputObjectZodSchema = makeSchema();
