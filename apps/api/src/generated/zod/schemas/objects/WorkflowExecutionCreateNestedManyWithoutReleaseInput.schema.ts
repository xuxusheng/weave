import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowExecutionCreateWithoutReleaseInputObjectSchema as WorkflowExecutionCreateWithoutReleaseInputObjectSchema } from './WorkflowExecutionCreateWithoutReleaseInput.schema';
import { WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema as WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema } from './WorkflowExecutionUncheckedCreateWithoutReleaseInput.schema';
import { WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema as WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema } from './WorkflowExecutionCreateOrConnectWithoutReleaseInput.schema';
import { WorkflowExecutionCreateManyReleaseInputEnvelopeObjectSchema as WorkflowExecutionCreateManyReleaseInputEnvelopeObjectSchema } from './WorkflowExecutionCreateManyReleaseInputEnvelope.schema';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './WorkflowExecutionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowExecutionCreateWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionCreateWithoutReleaseInputObjectSchema).array(), z.lazy(() => WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkflowExecutionCreateManyReleaseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema), z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkflowExecutionCreateNestedManyWithoutReleaseInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionCreateNestedManyWithoutReleaseInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionCreateNestedManyWithoutReleaseInput>;
export const WorkflowExecutionCreateNestedManyWithoutReleaseInputObjectZodSchema = makeSchema();
