import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './WorkflowReleaseWhereUniqueInput.schema';
import { WorkflowReleaseUpdateWithoutWorkflowInputObjectSchema as WorkflowReleaseUpdateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUpdateWithoutWorkflowInput.schema';
import { WorkflowReleaseUncheckedUpdateWithoutWorkflowInputObjectSchema as WorkflowReleaseUncheckedUpdateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUncheckedUpdateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowReleaseUpdateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedUpdateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInput>;
export const WorkflowReleaseUpdateWithWhereUniqueWithoutWorkflowInputObjectZodSchema = makeSchema();
