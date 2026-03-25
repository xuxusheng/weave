import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutExecutionsInputObjectSchema as WorkflowCreateWithoutExecutionsInputObjectSchema } from './WorkflowCreateWithoutExecutionsInput.schema';
import { WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema as WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema } from './WorkflowUncheckedCreateWithoutExecutionsInput.schema';
import { WorkflowCreateOrConnectWithoutExecutionsInputObjectSchema as WorkflowCreateOrConnectWithoutExecutionsInputObjectSchema } from './WorkflowCreateOrConnectWithoutExecutionsInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutExecutionsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkflowCreateNestedOneWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowCreateNestedOneWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateNestedOneWithoutExecutionsInput>;
export const WorkflowCreateNestedOneWithoutExecutionsInputObjectZodSchema = makeSchema();
