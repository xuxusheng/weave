import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema as WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema } from './WorkflowCreateNestedManyWithoutNamespaceInput.schema';
import { VariableCreateNestedManyWithoutNamespaceInputObjectSchema as VariableCreateNestedManyWithoutNamespaceInputObjectSchema } from './VariableCreateNestedManyWithoutNamespaceInput.schema';
import { SecretCreateNestedManyWithoutNamespaceInputObjectSchema as SecretCreateNestedManyWithoutNamespaceInputObjectSchema } from './SecretCreateNestedManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  workflows: z.lazy(() => WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  variables: z.lazy(() => VariableCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  secrets: z.lazy(() => SecretCreateNestedManyWithoutNamespaceInputObjectSchema).optional()
}).strict();
export const NamespaceCreateInputObjectSchema: z.ZodType<Prisma.NamespaceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateInput>;
export const NamespaceCreateInputObjectZodSchema = makeSchema();
