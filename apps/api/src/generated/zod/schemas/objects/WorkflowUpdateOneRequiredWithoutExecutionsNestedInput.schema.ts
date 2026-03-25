import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutExecutionsInputObjectSchema as WorkflowCreateWithoutExecutionsInputObjectSchema } from './WorkflowCreateWithoutExecutionsInput.schema';
import { WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema as WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema } from './WorkflowUncheckedCreateWithoutExecutionsInput.schema';
import { WorkflowCreateOrConnectWithoutExecutionsInputObjectSchema as WorkflowCreateOrConnectWithoutExecutionsInputObjectSchema } from './WorkflowCreateOrConnectWithoutExecutionsInput.schema';
import { WorkflowUpsertWithoutExecutionsInputObjectSchema as WorkflowUpsertWithoutExecutionsInputObjectSchema } from './WorkflowUpsertWithoutExecutionsInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowUpdateToOneWithWhereWithoutExecutionsInputObjectSchema as WorkflowUpdateToOneWithWhereWithoutExecutionsInputObjectSchema } from './WorkflowUpdateToOneWithWhereWithoutExecutionsInput.schema';
import { WorkflowUpdateWithoutExecutionsInputObjectSchema as WorkflowUpdateWithoutExecutionsInputObjectSchema } from './WorkflowUpdateWithoutExecutionsInput.schema';
import { WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema as WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutExecutionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutExecutionsInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkflowUpsertWithoutExecutionsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkflowUpdateToOneWithWhereWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowUpdateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutExecutionsInputObjectSchema)]).optional()
}).strict();
export const WorkflowUpdateOneRequiredWithoutExecutionsNestedInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutExecutionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutExecutionsNestedInput>;
export const WorkflowUpdateOneRequiredWithoutExecutionsNestedInputObjectZodSchema = makeSchema();
