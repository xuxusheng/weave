import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseScalarWhereInputObjectSchema as WorkflowReleaseScalarWhereInputObjectSchema } from './WorkflowReleaseScalarWhereInput.schema';
import { WorkflowReleaseUpdateManyMutationInputObjectSchema as WorkflowReleaseUpdateManyMutationInputObjectSchema } from './WorkflowReleaseUpdateManyMutationInput.schema';
import { WorkflowReleaseUncheckedUpdateManyWithoutWorkflowInputObjectSchema as WorkflowReleaseUncheckedUpdateManyWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUncheckedUpdateManyWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowReleaseScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowReleaseUpdateManyMutationInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedUpdateManyWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInput>;
export const WorkflowReleaseUpdateManyWithWhereWithoutWorkflowInputObjectZodSchema = makeSchema();
