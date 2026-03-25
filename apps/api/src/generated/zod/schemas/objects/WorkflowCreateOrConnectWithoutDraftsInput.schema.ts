import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowCreateWithoutDraftsInputObjectSchema as WorkflowCreateWithoutDraftsInputObjectSchema } from './WorkflowCreateWithoutDraftsInput.schema';
import { WorkflowUncheckedCreateWithoutDraftsInputObjectSchema as WorkflowUncheckedCreateWithoutDraftsInputObjectSchema } from './WorkflowUncheckedCreateWithoutDraftsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowCreateWithoutDraftsInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutDraftsInputObjectSchema)])
}).strict();
export const WorkflowCreateOrConnectWithoutDraftsInputObjectSchema: z.ZodType<Prisma.WorkflowCreateOrConnectWithoutDraftsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateOrConnectWithoutDraftsInput>;
export const WorkflowCreateOrConnectWithoutDraftsInputObjectZodSchema = makeSchema();
