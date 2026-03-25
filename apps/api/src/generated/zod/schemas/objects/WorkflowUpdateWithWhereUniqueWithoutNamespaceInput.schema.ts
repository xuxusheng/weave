import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowUpdateWithoutNamespaceInputObjectSchema as WorkflowUpdateWithoutNamespaceInputObjectSchema } from './WorkflowUpdateWithoutNamespaceInput.schema';
import { WorkflowUncheckedUpdateWithoutNamespaceInputObjectSchema as WorkflowUncheckedUpdateWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedUpdateWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowUpdateWithoutNamespaceInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutNamespaceInputObjectSchema)])
}).strict();
export const WorkflowUpdateWithWhereUniqueWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateWithWhereUniqueWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateWithWhereUniqueWithoutNamespaceInput>;
export const WorkflowUpdateWithWhereUniqueWithoutNamespaceInputObjectZodSchema = makeSchema();
