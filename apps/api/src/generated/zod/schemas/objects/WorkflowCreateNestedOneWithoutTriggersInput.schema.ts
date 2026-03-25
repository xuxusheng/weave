import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutTriggersInputObjectSchema as WorkflowCreateWithoutTriggersInputObjectSchema } from './WorkflowCreateWithoutTriggersInput.schema';
import { WorkflowUncheckedCreateWithoutTriggersInputObjectSchema as WorkflowUncheckedCreateWithoutTriggersInputObjectSchema } from './WorkflowUncheckedCreateWithoutTriggersInput.schema';
import { WorkflowCreateOrConnectWithoutTriggersInputObjectSchema as WorkflowCreateOrConnectWithoutTriggersInputObjectSchema } from './WorkflowCreateOrConnectWithoutTriggersInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutTriggersInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutTriggersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutTriggersInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkflowCreateNestedOneWithoutTriggersInputObjectSchema: z.ZodType<Prisma.WorkflowCreateNestedOneWithoutTriggersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateNestedOneWithoutTriggersInput>;
export const WorkflowCreateNestedOneWithoutTriggersInputObjectZodSchema = makeSchema();
