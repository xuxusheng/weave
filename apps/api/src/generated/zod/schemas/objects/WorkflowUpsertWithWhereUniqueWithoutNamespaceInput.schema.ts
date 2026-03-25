import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowUpdateWithoutNamespaceInputObjectSchema as WorkflowUpdateWithoutNamespaceInputObjectSchema } from './WorkflowUpdateWithoutNamespaceInput.schema';
import { WorkflowUncheckedUpdateWithoutNamespaceInputObjectSchema as WorkflowUncheckedUpdateWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedUpdateWithoutNamespaceInput.schema';
import { WorkflowCreateWithoutNamespaceInputObjectSchema as WorkflowCreateWithoutNamespaceInputObjectSchema } from './WorkflowCreateWithoutNamespaceInput.schema';
import { WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema as WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedCreateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkflowUpdateWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutNamespaceInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowCreateWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutNamespaceInputObjectSchema)])
}).strict();
export const WorkflowUpsertWithWhereUniqueWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.WorkflowUpsertWithWhereUniqueWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpsertWithWhereUniqueWithoutNamespaceInput>;
export const WorkflowUpsertWithWhereUniqueWithoutNamespaceInputObjectZodSchema = makeSchema();
