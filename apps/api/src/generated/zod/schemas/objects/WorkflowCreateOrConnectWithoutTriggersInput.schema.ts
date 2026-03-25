import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowCreateWithoutTriggersInputObjectSchema as WorkflowCreateWithoutTriggersInputObjectSchema } from './WorkflowCreateWithoutTriggersInput.schema';
import { WorkflowUncheckedCreateWithoutTriggersInputObjectSchema as WorkflowUncheckedCreateWithoutTriggersInputObjectSchema } from './WorkflowUncheckedCreateWithoutTriggersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowCreateWithoutTriggersInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutTriggersInputObjectSchema)])
}).strict();
export const WorkflowCreateOrConnectWithoutTriggersInputObjectSchema: z.ZodType<Prisma.WorkflowCreateOrConnectWithoutTriggersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateOrConnectWithoutTriggersInput>;
export const WorkflowCreateOrConnectWithoutTriggersInputObjectZodSchema = makeSchema();
