import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowScalarWhereInputObjectSchema as WorkflowScalarWhereInputObjectSchema } from './WorkflowScalarWhereInput.schema';
import { WorkflowUpdateManyMutationInputObjectSchema as WorkflowUpdateManyMutationInputObjectSchema } from './WorkflowUpdateManyMutationInput.schema';
import { WorkflowUncheckedUpdateManyWithoutNamespaceInputObjectSchema as WorkflowUncheckedUpdateManyWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedUpdateManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkflowUpdateManyMutationInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateManyWithoutNamespaceInputObjectSchema)])
}).strict();
export const WorkflowUpdateManyWithWhereWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateManyWithWhereWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateManyWithWhereWithoutNamespaceInput>;
export const WorkflowUpdateManyWithWhereWithoutNamespaceInputObjectZodSchema = makeSchema();
