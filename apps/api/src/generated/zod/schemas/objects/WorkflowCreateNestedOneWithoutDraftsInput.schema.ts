import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutDraftsInputObjectSchema as WorkflowCreateWithoutDraftsInputObjectSchema } from './WorkflowCreateWithoutDraftsInput.schema';
import { WorkflowUncheckedCreateWithoutDraftsInputObjectSchema as WorkflowUncheckedCreateWithoutDraftsInputObjectSchema } from './WorkflowUncheckedCreateWithoutDraftsInput.schema';
import { WorkflowCreateOrConnectWithoutDraftsInputObjectSchema as WorkflowCreateOrConnectWithoutDraftsInputObjectSchema } from './WorkflowCreateOrConnectWithoutDraftsInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutDraftsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutDraftsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutDraftsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkflowCreateNestedOneWithoutDraftsInputObjectSchema: z.ZodType<Prisma.WorkflowCreateNestedOneWithoutDraftsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateNestedOneWithoutDraftsInput>;
export const WorkflowCreateNestedOneWithoutDraftsInputObjectZodSchema = makeSchema();
