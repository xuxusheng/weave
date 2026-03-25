import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowTriggerWhereUniqueInputObjectSchema as WorkflowTriggerWhereUniqueInputObjectSchema } from './WorkflowTriggerWhereUniqueInput.schema';
import { WorkflowTriggerUpdateWithoutWorkflowInputObjectSchema as WorkflowTriggerUpdateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUpdateWithoutWorkflowInput.schema';
import { WorkflowTriggerUncheckedUpdateWithoutWorkflowInputObjectSchema as WorkflowTriggerUncheckedUpdateWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUncheckedUpdateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowTriggerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowTriggerUpdateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowTriggerUncheckedUpdateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInput>;
export const WorkflowTriggerUpdateWithWhereUniqueWithoutWorkflowInputObjectZodSchema = makeSchema();
