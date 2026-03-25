import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema as WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema } from './WorkflowCreateNestedManyWithoutNamespaceInput.schema';
import { VariableCreateNestedManyWithoutNamespaceInputObjectSchema as VariableCreateNestedManyWithoutNamespaceInputObjectSchema } from './VariableCreateNestedManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workflows: z.lazy(() => WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  variables: z.lazy(() => VariableCreateNestedManyWithoutNamespaceInputObjectSchema).optional()
}).strict();
export const NamespaceCreateWithoutSecretsInputObjectSchema: z.ZodType<Prisma.NamespaceCreateWithoutSecretsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateWithoutSecretsInput>;
export const NamespaceCreateWithoutSecretsInputObjectZodSchema = makeSchema();
