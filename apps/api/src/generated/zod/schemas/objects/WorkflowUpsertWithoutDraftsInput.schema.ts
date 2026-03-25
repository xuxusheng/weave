import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowUpdateWithoutDraftsInputObjectSchema as WorkflowUpdateWithoutDraftsInputObjectSchema } from './WorkflowUpdateWithoutDraftsInput.schema';
import { WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema as WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutDraftsInput.schema';
import { WorkflowCreateWithoutDraftsInputObjectSchema as WorkflowCreateWithoutDraftsInputObjectSchema } from './WorkflowCreateWithoutDraftsInput.schema';
import { WorkflowUncheckedCreateWithoutDraftsInputObjectSchema as WorkflowUncheckedCreateWithoutDraftsInputObjectSchema } from './WorkflowUncheckedCreateWithoutDraftsInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkflowUpdateWithoutDraftsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowCreateWithoutDraftsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutDraftsInputObjectSchema)]),
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional()
}).strict();
export const WorkflowUpsertWithoutDraftsInputObjectSchema: z.ZodType<Prisma.WorkflowUpsertWithoutDraftsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpsertWithoutDraftsInput>;
export const WorkflowUpsertWithoutDraftsInputObjectZodSchema = makeSchema();
