import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './WorkflowTriggerWhereUniqueInput.schema';
import { WorkflowTriggerUpdateWithoutWorkflowInputObjectSchema as WorkflowTriggerUpdateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUpdateWithoutWorkflowInput.schema';
import { WorkflowTriggerUncheckedUpdateWithoutWorkflowInputObjectSchema as WorkflowTriggerUncheckedUpdateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUncheckedUpdateWithoutWorkflowInput.schema';
import { WorkflowTriggerCreateWithoutWorkflowInputObjectSchema as WorkflowTriggerCreateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerCreateWithoutWorkflowInput.schema';
import { WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUncheckedCreateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkflowTriggerUpdateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUncheckedUpdateWithoutWorkflowInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowTriggerCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUncheckedCreateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInput>;
export const WorkflowTriggerUpsertWithWhereUniqueWithoutWorkflowInputObjectZodSchema = makeSchema();
