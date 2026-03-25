import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema as WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema } from './WorkflowCreateNestedManyWithoutNamespaceInput.schema';
import { SecretCreateNestedManyWithoutNamespaceInputObjectSchema as SecretCreateNestedManyWithoutNamespaceInputObjectSchema } from './SecretCreateNestedManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workflows: z.lazy(() => WorkflowCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  secrets: z.lazy(() => SecretCreateNestedManyWithoutNamespaceInputObjectSchema).optional()
}).strict();
export const NamespaceCreateWithoutVariablesInputObjectSchema: z.ZodType<Prisma.NamespaceCreateWithoutVariablesInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceCreateWithoutVariablesInput>;
export const NamespaceCreateWithoutVariablesInputObjectZodSchema = makeSchema();
