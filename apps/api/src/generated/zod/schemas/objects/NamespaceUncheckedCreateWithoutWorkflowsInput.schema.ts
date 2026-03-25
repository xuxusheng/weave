import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './VariableUncheckedCreateNestedManyWithoutNamespaceInput.schema';
import { SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './SecretUncheckedCreateNestedManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variables: z.lazy(() => VariableUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  secrets: z.lazy(() => SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional()
}).strict();
export const NamespaceUncheckedCreateWithoutWorkflowsInputObjectSchema: z.ZodType<Prisma.NamespaceUncheckedCreateWithoutWorkflowsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUncheckedCreateWithoutWorkflowsInput>;
export const NamespaceUncheckedCreateWithoutWorkflowsInputObjectZodSchema = makeSchema();
