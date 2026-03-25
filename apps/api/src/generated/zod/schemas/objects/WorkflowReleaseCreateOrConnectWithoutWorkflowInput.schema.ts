import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './WorkflowReleaseWhereUniqueInput.schema';
import { WorkflowReleaseCreateWithoutWorkflowInputObjectSchema as WorkflowReleaseCreateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseCreateWithoutWorkflowInput.schema';
import { WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUncheckedCreateWithoutWorkflowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowReleaseCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema)])
}).strict();
export const WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseCreateOrConnectWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateOrConnectWithoutWorkflowInput>;
export const WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectZodSchema = makeSchema();
