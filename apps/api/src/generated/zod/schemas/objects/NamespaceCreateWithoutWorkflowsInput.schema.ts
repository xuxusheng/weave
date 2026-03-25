import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableCreateNestedManyWithoutNamespaceInputObjectSchema as VariableCreateNestedManyWithoutNamespaceInputObjectSchema } from './VariableCreateNestedManyWithoutNamespaceInput.schema';
import { SecretCreateNestedManyWithoutNamespaceInputObjectSchema as SecretCreateNestedManyWithoutNamespaceInputObjectSchema } from './SecretCreateNestedManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variables: z.lazy(() => VariableCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  secrets: z.lazy(() => SecretCreateNestedManyWithoutNamespaceInputObjectSchema).optional()
}).strict();
export const NamespaceCreateWithoutWorkflowsInputObjectSchema: z.ZodType<Prisma.NamespaceCreateWithoutWorkflowsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateWithoutWorkflowsInput>;
export const NamespaceCreateWithoutWorkflowsInputObjectZodSchema = makeSchema();
