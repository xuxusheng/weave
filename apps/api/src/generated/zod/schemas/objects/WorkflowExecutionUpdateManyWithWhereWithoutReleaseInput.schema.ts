import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowExecutionScalarWhereInputObjectSchema as WorkflowExecutionScalarWhereInputObjectSchema } from './WorkflowExecutionScalarWhereInput.schema';
import { WorkflowExecutionUpdateManyMutationInputObjectSchema as WorkflowExecutionUpdateManyMutationInputObjectSchema } from './WorkflowExecutionUpdateManyMutationInput.schema';
import { WorkflowExecutionUncheckedUpdateManyWithoutReleaseInputObjectSchema as WorkflowExecutionUncheckedUpdateManyWithoutReleaseInputObjectSchema } from './WorkflowExecutionUncheckedUpdateManyWithoutReleaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowExecutionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowExecutionUpdateManyMutationInputObjectSchema), z.lazy(() => WorkflowExecutionUncheckedUpdateManyWithoutReleaseInputObjectSchema)])
}).strict();
export const WorkflowExecutionUpdateManyWithWhereWithoutReleaseInputObjectSchema: z.ZodType<Prisma.WorkflowExecutionUpdateManyWithWhereWithoutReleaseInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowExecutionUpdateManyWithWhereWithoutReleaseInput>;
export const WorkflowExecutionUpdateManyWithWhereWithoutReleaseInputObjectZodSchema = makeSchema();
