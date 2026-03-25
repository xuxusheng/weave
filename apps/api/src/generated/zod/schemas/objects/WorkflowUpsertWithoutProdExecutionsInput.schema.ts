import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowUpdateWithoutProdExecutionsInputObjectSchema as WorkflowUpdateWithoutProdExecutionsInputObjectSchema } from './WorkflowUpdateWithoutProdExecutionsInput.schema';
import { WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema as WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutProdExecutionsInput.schema';
import { WorkflowCreateWithoutProdExecutionsInputObjectSchema as WorkflowCreateWithoutProdExecutionsInputObjectSchema } from './WorkflowCreateWithoutProdExecutionsInput.schema';
import { WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema as WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema } from './WorkflowUncheckedCreateWithoutProdExecutionsInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkflowUpdateWithoutProdExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowCreateWithoutProdExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema)]),
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional()
}).strict();
export const WorkflowUpsertWithoutProdExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowUpsertWithoutProdExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpsertWithoutProdExecutionsInput>;
export const WorkflowUpsertWithoutProdExecutionsInputObjectZodSchema = makeSchema();
