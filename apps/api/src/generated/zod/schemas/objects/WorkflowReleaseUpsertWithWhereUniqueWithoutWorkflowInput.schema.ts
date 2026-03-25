import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './WorkflowReleaseWhereUniqueInput.schema';
import { WorkflowReleaseUpdateWithoutWorkflowInputObjectSchema as WorkflowReleaseUpdateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUpdateWithoutWorkflowInput.schema';
import { WorkflowReleaseUncheckedUpdateWithoutWorkflowInputObjectSchema as WorkflowReleaseUncheckedUpdateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUncheckedUpdateWithoutWorkflowInput.schema';
import { WorkflowReleaseCreateWithoutWorkflowInputObjectSchema as WorkflowReleaseCreateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseCreateWithoutWorkflowInput.schema';
import { WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUncheckedCreateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkflowReleaseUpdateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedUpdateWithoutWorkflowInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowReleaseCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInput>;
export const WorkflowReleaseUpsertWithWhereUniqueWithoutWorkflowInputObjectZodSchema = makeSchema();
