import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema';
import { WorkflowUpdateWithoutExecutionsInputObjectSchema as WorkflowUpdateWithoutExecutionsInputObjectSchema } from './WorkflowUpdateWithoutExecutionsInput.schema';
import { WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema as WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutExecutionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkflowUpdateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema)])
}).strict();
export const WorkflowUpdateToOneWithWhereWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutExecutionsInput>;
export const WorkflowUpdateToOneWithWhereWithoutExecutionsInputObjectZodSchema = makeSchema();
