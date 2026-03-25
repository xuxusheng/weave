import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './WorkflowExecutionWhereUniqueInput.schema';
import { WorkflowExecutionUpdateWithoutReleaseInputObjectSchema as WorkflowExecutionUpdateWithoutReleaseInputObjectSchema } from './WorkflowExecutionUpdateWithoutReleaseInput.schema';
import { WorkflowExecutionUncheckedUpdateWithoutReleaseInputObjectSchema as WorkflowExecutionUncheckedUpdateWithoutReleaseInputObjectSchema } from './WorkflowExecutionUncheckedUpdateWithoutReleaseInput.schema';
import { WorkflowExecutionCreateWithoutReleaseInputObjectSchema as WorkflowExecutionCreateWithoutReleaseInputObjectSchema } from './WorkflowExecutionCreateWithoutReleaseInput.schema';
import { WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema as WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema } from './WorkflowExecutionUncheckedCreateWithoutReleaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkflowExecutionUpdateWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUncheckedUpdateWithoutReleaseInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowExecutionCreateWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUncheckedCreateWithoutReleaseInputObjectSchema)])
}).strict();
export const WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInput>;
export const WorkflowExecutionUpsertWithWhereUniqueWithoutReleaseInputObjectZodSchema = makeSchema();
