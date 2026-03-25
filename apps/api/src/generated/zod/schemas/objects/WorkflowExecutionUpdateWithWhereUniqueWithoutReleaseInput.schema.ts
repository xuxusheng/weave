import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowExecutionWhereUniqueInputObjectSchema as WorkflowExecutionWhereUniqueInputObjectSchema } from './WorkflowExecutionWhereUniqueInput.schema';
import { WorkflowExecutionUpdateWithoutReleaseInputObjectSchema as WorkflowExecutionUpdateWithoutReleaseInputObjectSchema } from './WorkflowExecutionUpdateWithoutReleaseInput.schema';
import { WorkflowExecutionUncheckedUpdateWithoutReleaseInputObjectSchema as WorkflowExecutionUncheckedUpdateWithoutReleaseInputObjectSchema } from './WorkflowExecutionUncheckedUpdateWithoutReleaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowExecutionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowExecutionUpdateWithoutReleaseInputObjectSchema), z.lazy(() => WorkflowExecutionUncheckedUpdateWithoutReleaseInputObjectSchema)])
}).strict();
export const WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInput>;
export const WorkflowExecutionUpdateWithWhereUniqueWithoutReleaseInputObjectZodSchema = makeSchema();
