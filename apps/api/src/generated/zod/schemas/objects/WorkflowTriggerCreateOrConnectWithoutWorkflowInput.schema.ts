import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './WorkflowTriggerWhereUniqueInput.schema';
import { WorkflowTriggerCreateWithoutWorkflowInputObjectSchema as WorkflowTriggerCreateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerCreateWithoutWorkflowInput.schema';
import { WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUncheckedCreateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowTriggerCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerCreateOrConnectWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerCreateOrConnectWithoutWorkflowInput>;
export const WorkflowTriggerCreateOrConnectWithoutWorkflowInputObjectZodSchema = makeSchema();
