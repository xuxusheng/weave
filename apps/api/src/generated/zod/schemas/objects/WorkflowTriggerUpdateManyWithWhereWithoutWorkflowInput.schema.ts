import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowTriggerScalarWhereInputObjectSchema as WorkflowTriggerScalarWhereInputObjectSchema } from './WorkflowTriggerScalarWhereInput.schema';
import { WorkflowTriggerUpdateManyMutationInputObjectSchema as WorkflowTriggerUpdateManyMutationInputObjectSchema } from './WorkflowTriggerUpdateManyMutationInput.schema';
import { WorkflowTriggerUncheckedUpdateManyWithoutWorkflowInputObjectSchema as WorkflowTriggerUncheckedUpdateManyWithoutWorkflowInputObjectSchema } from './WorkflowTriggerUncheckedUpdateManyWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowTriggerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowTriggerUpdateManyMutationInputObjectSchema), z.lazy(() => WorkflowTriggerUncheckedUpdateManyWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInput>;
export const WorkflowTriggerUpdateManyWithWhereWithoutWorkflowInputObjectZodSchema = makeSchema();
