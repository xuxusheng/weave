import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowCreateWithoutExecutionsInputObjectSchema as WorkflowCreateWithoutExecutionsInputObjectSchema } from './WorkflowCreateWithoutExecutionsInput.schema';
import { WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema as WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema } from './WorkflowUncheckedCreateWithoutExecutionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowCreateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutExecutionsInputObjectSchema)])
}).strict();
export const WorkflowCreateOrConnectWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowCreateOrConnectWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateOrConnectWithoutExecutionsInput>;
export const WorkflowCreateOrConnectWithoutExecutionsInputObjectZodSchema = makeSchema();
