import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedCreateNestedManyWithoutNamespaceInput.schema';
import { VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './VariableUncheckedCreateNestedManyWithoutNamespaceInput.schema';
import { SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './SecretUncheckedCreateNestedManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  workflows: z.lazy(() => WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  variables: z.lazy(() => VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  secrets: z.lazy(() => SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional()
}).strict();
export const NamespaceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.NamespaceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUncheckedCreateInput>;
export const NamespaceUncheckedCreateInputObjectZodSchema = makeSchema();
