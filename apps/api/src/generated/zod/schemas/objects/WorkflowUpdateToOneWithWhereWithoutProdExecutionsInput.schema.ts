import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema';
import { WorkflowUpdateWithoutProdExecutionsInputObjectSchema as WorkflowUpdateWithoutProdExecutionsInputObjectSchema } from './WorkflowUpdateWithoutProdExecutionsInput.schema';
import { WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema as WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema } from './WorkflowUncheckedUpdateWithoutProdExecutionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkflowUpdateWithoutProdExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutProdExecutionsInputObjectSchema)])
}).strict();
export const WorkflowUpdateToOneWithWhereWithoutProdExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutProdExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutProdExecutionsInput>;
export const WorkflowUpdateToOneWithWhereWithoutProdExecutionsInputObjectZodSchema = makeSchema();
