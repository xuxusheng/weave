import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutProdExecutionsInputObjectSchema as WorkflowCreateWithoutProdExecutionsInputObjectSchema } from './WorkflowCreateWithoutProdExecutionsInput.schema';
import { WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema as WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema } from './WorkflowUncheckedCreateWithoutProdExecutionsInput.schema';
import { WorkflowCreateOrConnectWithoutProdExecutionsInputObjectSchema as WorkflowCreateOrConnectWithoutProdExecutionsInputObjectSchema } from './WorkflowCreateOrConnectWithoutProdExecutionsInput.schema';
import { WorkflowUpsertWithoutProdExecutionsInputObjectSchema as WorkflowUpsertWithoutProdExecutionsInputObjectSchema } from './WorkflowUpsertWithoutProdExecutionsInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowUpdateToOneWithWhereWithoutProdExecutionsInputObjectSchema as WorkflowUpdateToOneWithWhereWithoutProdExecutionsInputObjectSchema } from './WorkflowUpdateToOneWithWhereWithoutProdExecutionsInput.schema';
import { WorkflowUpdateWithoutProdExecutionsInputObjectSchema as WorkflowUpdateWithoutProdExecutionsInputObjectSchema } from './WorkflowUpdateWithoutProdExecutionsInput.schema';
import { WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema as WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutProdExecutionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutProdExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutProdExecutionsInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkflowUpsertWithoutProdExecutionsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkflowUpdateToOneWithWhereWithoutProdExecutionsInputObjectSchema), z.lazy(() => WorkflowUpdateWithoutProdExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema)]).optional()
}).strict();
export const WorkflowUpdateOneRequiredWithoutProdExecutionsNestedInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutProdExecutionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutProdExecutionsNestedInput>;
export const WorkflowUpdateOneRequiredWithoutProdExecutionsNestedInputObjectZodSchema = makeSchema();
