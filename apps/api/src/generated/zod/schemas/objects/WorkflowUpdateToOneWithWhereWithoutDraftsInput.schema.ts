import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema';
import { WorkflowUpdateWithoutDraftsInputObjectSchema as WorkflowUpdateWithoutDraftsInputObjectSchema } from './WorkflowUpdateWithoutDraftsInput.schema';
import { WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema as WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutDraftsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkflowUpdateWithoutDraftsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema)])
}).strict();
export const WorkflowUpdateToOneWithWhereWithoutDraftsInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutDraftsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutDraftsInput>;
export const WorkflowUpdateToOneWithWhereWithoutDraftsInputObjectZodSchema = makeSchema();
