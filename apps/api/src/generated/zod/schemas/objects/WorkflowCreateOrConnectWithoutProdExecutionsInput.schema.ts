import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowCreateWithoutProdExecutionsInputObjectSchema as WorkflowCreateWithoutProdExecutionsInputObjectSchema } from './WorkflowCreateWithoutProdExecutionsInput.schema';
import { WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema as WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema } from './WorkflowUncheckedCreateWithoutProdExecutionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowCreateWithoutProdExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema)])
}).strict();
export const WorkflowCreateOrConnectWithoutProdExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowCreateOrConnectWithoutProdExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateOrConnectWithoutProdExecutionsInput>;
export const WorkflowCreateOrConnectWithoutProdExecutionsInputObjectZodSchema = makeSchema();
