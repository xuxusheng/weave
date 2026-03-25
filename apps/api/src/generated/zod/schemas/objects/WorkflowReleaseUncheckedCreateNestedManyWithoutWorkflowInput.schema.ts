import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseCreateWithoutWorkflowInputObjectSchema as WorkflowReleaseCreateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseCreateWithoutWorkflowInput.schema';
import { WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema as WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema } from './WorkflowReleaseUncheckedCreateWithoutWorkflowInput.schema';
import { WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema as WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema } from './WorkflowReleaseCreateOrConnectWithoutWorkflowInput.schema';
import { WorkflowReleaseCreateManyWorkflowInputEnvelopeObjectSchema as WorkflowReleaseCreateManyWorkflowInputEnvelopeObjectSchema } from './WorkflowReleaseCreateManyWorkflowInputEnvelope.schema';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './WorkflowReleaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowReleaseCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseCreateWithoutWorkflowInputObjectSchema).array(), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutWorkflowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema), z.lazy(() => WorkflowReleaseCreateOrConnectWithoutWorkflowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowReleaseCreateManyWorkflowInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema), z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowReleaseUncheckedCreateNestedManyWithoutWorkflowInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUncheckedCreateNestedManyWithoutWorkflowInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUncheckedCreateNestedManyWithoutWorkflowInput>;
export const WorkflowReleaseUncheckedCreateNestedManyWithoutWorkflowInputObjectZodSchema = makeSchema();
