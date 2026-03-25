import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedCreateNestedManyWithoutNamespaceInput.schema';
import { VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './VariableUncheckedCreateNestedManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workflows: z.lazy(() => WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  variables: z.lazy(() => VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional()
}).strict();
export const NamespaceUncheckedCreateWithoutSecretsInputObjectSchema: z.ZodType<Prisma.NamespaceUncheckedCreateWithoutSecretsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUncheckedCreateWithoutSecretsInput>;
export const NamespaceUncheckedCreateWithoutSecretsInputObjectZodSchema = makeSchema();
