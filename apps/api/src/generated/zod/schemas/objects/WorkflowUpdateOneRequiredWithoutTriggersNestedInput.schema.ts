import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutTriggersInputObjectSchema as WorkflowCreateWithoutTriggersInputObjectSchema } from './WorkflowCreateWithoutTriggersInput.schema';
import { WorkflowUncheckedCreateWithoutTriggersInputObjectSchema as WorkflowUncheckedCreateWithoutTriggersInputObjectSchema } from './WorkflowUncheckedCreateWithoutTriggersInput.schema';
import { WorkflowCreateOrConnectWithoutTriggersInputObjectSchema as WorkflowCreateOrConnectWithoutTriggersInputObjectSchema } from './WorkflowCreateOrConnectWithoutTriggersInput.schema';
import { WorkflowUpsertWithoutTriggersInputObjectSchema as WorkflowUpsertWithoutTriggersInputObjectSchema } from './WorkflowUpsertWithoutTriggersInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowUpdateToOneWithWhereWithoutTriggersInputObjectSchema as WorkflowUpdateToOneWithWhereWithoutTriggersInputObjectSchema } from './WorkflowUpdateToOneWithWhereWithoutTriggersInput.schema';
import { WorkflowUpdateWithoutTriggersInputObjectSchema as WorkflowUpdateWithoutTriggersInputObjectSchema } from './WorkflowUpdateWithoutTriggersInput.schema';
import { WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema as WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema } from './WorkflowUncheckedUpdateWithoutTriggersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutTriggersInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutTriggersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutTriggersInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkflowUpsertWithoutTriggersInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkflowUpdateToOneWithWhereWithoutTriggersInputObjectSchema), z.lazy(() => WorkflowUpdateWithoutTriggersInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema)]).optional()
}).strict();
export const WorkflowUpdateOneRequiredWithoutTriggersNestedInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutTriggersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutTriggersNestedInput>;
export const WorkflowUpdateOneRequiredWithoutTriggersNestedInputObjectZodSchema = makeSchema();
