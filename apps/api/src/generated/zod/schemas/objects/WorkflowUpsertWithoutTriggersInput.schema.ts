import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowUpdateWithoutTriggersInputObjectSchema as WorkflowUpdateWithoutTriggersInputObjectSchema } from './WorkflowUpdateWithoutTriggersInput.schema';
import { WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema as WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema } from './WorkflowUncheckedUpdateWithoutTriggersInput.schema';
import { WorkflowCreateWithoutTriggersInputObjectSchema as WorkflowCreateWithoutTriggersInputObjectSchema } from './WorkflowCreateWithoutTriggersInput.schema';
import { WorkflowUncheckedCreateWithoutTriggersInputObjectSchema as WorkflowUncheckedCreateWithoutTriggersInputObjectSchema } from './WorkflowUncheckedCreateWithoutTriggersInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkflowUpdateWithoutTriggersInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowCreateWithoutTriggersInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutTriggersInputObjectSchema)]),
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional()
}).strict();
export const WorkflowUpsertWithoutTriggersInputObjectSchema: z.ZodType<Prisma.WorkflowUpsertWithoutTriggersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpsertWithoutTriggersInput>;
export const WorkflowUpsertWithoutTriggersInputObjectZodSchema = makeSchema();
