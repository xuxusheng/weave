import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './WorkflowExecutionWhereUniqueInput.schema';
import { WorkflowExecutionCreateWithoutReleaseInputObjectSchema as WorkflowExecutionCreateWithoutReleaseInputObjectSchema } from './WorkflowExecutionCreateWithoutReleaseInput.schema';
import { WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema as WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema } from './WorkflowExecutionUncheckedCreateWithoutReleaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowExecutionCreateWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema)])
}).strict();
export const WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionCreateOrConnectWithoutReleaseInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionCreateOrConnectWithoutReleaseInput>;
export const WorkflowExecutionCreateOrConnectWithoutReleaseInputObjectZodSchema = makeSchema();
