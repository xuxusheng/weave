import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowUpdateWithoutExecutionsInputObjectSchema as WorkflowUpdateWithoutExecutionsInputObjectSchema } from './WorkflowUpdateWithoutExecutionsInput.schema';
import { WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema as WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutExecutionsInput.schema';
import { WorkflowCreateWithoutExecutionsInputObjectSchema as WorkflowCreateWithoutExecutionsInputObjectSchema } from './WorkflowCreateWithoutExecutionsInput.schema';
import { WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema as WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema } from './WorkflowUncheckedCreateWithoutExecutionsInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkflowUpdateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowCreateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema)]),
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional()
}).strict();
export const WorkflowUpsertWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowUpsertWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpsertWithoutExecutionsInput>;
export const WorkflowUpsertWithoutExecutionsInputObjectZodSchema = makeSchema();
