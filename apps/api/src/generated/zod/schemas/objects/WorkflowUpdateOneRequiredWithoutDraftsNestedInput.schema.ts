import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutDraftsInputObjectSchema as WorkflowCreateWithoutDraftsInputObjectSchema } from './WorkflowCreateWithoutDraftsInput.schema';
import { WorkflowUncheckedCreateWithoutDraftsInputObjectSchema as WorkflowUncheckedCreateWithoutDraftsInputObjectSchema } from './WorkflowUncheckedCreateWithoutDraftsInput.schema';
import { WorkflowCreateOrConnectWithoutDraftsInputObjectSchema as WorkflowCreateOrConnectWithoutDraftsInputObjectSchema } from './WorkflowCreateOrConnectWithoutDraftsInput.schema';
import { WorkflowUpsertWithoutDraftsInputObjectSchema as WorkflowUpsertWithoutDraftsInputObjectSchema } from './WorkflowUpsertWithoutDraftsInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowUpdateToOneWithWhereWithoutDraftsInputObjectSchema as WorkflowUpdateToOneWithWhereWithoutDraftsInputObjectSchema } from './WorkflowUpdateToOneWithWhereWithoutDraftsInput.schema';
import { WorkflowUpdateWithoutDraftsInputObjectSchema as WorkflowUpdateWithoutDraftsInputObjectSchema } from './WorkflowUpdateWithoutDraftsInput.schema';
import { WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema as WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutDraftsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutDraftsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutDraftsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutDraftsInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkflowUpsertWithoutDraftsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkflowUpdateToOneWithWhereWithoutDraftsInputObjectSchema), z.lazy(() => WorkflowUpdateWithoutDraftsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutDraftsInputObjectSchema)]).optional()
}).strict();
export const WorkflowUpdateOneRequiredWithoutDraftsNestedInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutDraftsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutDraftsNestedInput>;
export const WorkflowUpdateOneRequiredWithoutDraftsNestedInputObjectZodSchema = makeSchema();
