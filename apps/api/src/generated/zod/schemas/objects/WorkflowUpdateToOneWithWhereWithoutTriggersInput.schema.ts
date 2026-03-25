import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema';
import { WorkflowUpdateWithoutTriggersInputObjectSchema as WorkflowUpdateWithoutTriggersInputObjectSchema } from './WorkflowUpdateWithoutTriggersInput.schema';
import { WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema as WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema } from './WorkflowUncheckedUpdateWithoutTriggersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkflowUpdateWithoutTriggersInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema)])
}).strict();
export const WorkflowUpdateToOneWithWhereWithoutTriggersInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutTriggersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutTriggersInput>;
export const WorkflowUpdateToOneWithWhereWithoutTriggersInputObjectZodSchema = makeSchema();
