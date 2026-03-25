import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutProdExecutionsInputObjectSchema as WorkflowCreateWithoutProdExecutionsInputObjectSchema } from './WorkflowCreateWithoutProdExecutionsInput.schema';
import { WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema as WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema } from './WorkflowUncheckedCreateWithoutProdExecutionsInput.schema';
import { WorkflowCreateOrConnectWithoutProdExecutionsInputObjectSchema as WorkflowCreateOrConnectWithoutProdExecutionsInputObjectSchema } from './WorkflowCreateOrConnectWithoutProdExecutionsInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutProdExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutProdExecutionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutProdExecutionsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkflowCreateNestedOneWithoutProdExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowCreateNestedOneWithoutProdExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateNestedOneWithoutProdExecutionsInput>;
export const WorkflowCreateNestedOneWithoutProdExecutionsInputObjectZodSchema = makeSchema();
