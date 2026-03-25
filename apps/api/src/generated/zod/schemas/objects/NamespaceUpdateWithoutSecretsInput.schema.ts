import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkflowUpdateManyWithoutNamespaceNestedInputObjectSchema as WorkflowUpdateManyWithoutNamespaceNestedInputObjectSchema } from './WorkflowUpdateManyWithoutNamespaceNestedInput.schema';
import { VariableUpdateManyWithoutNamespaceNestedInputObjectSchema as VariableUpdateManyWithoutNamespaceNestedInputObjectSchema } from './VariableUpdateManyWithoutNamespaceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  kestraNamespace: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  workflows: z.lazy(() => WorkflowUpdateManyWithoutNamespaceNestedInputObjectSchema).optional(),
  variables: z.lazy(() => VariableUpdateManyWithoutNamespaceNestedInputObjectSchema).optional()
}).strict();
export const NamespaceUpdateWithoutSecretsInputObjectSchema: z.ZodType<Prisma.NamespaceUpdateWithoutSecretsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpdateWithoutSecretsInput>;
export const NamespaceUpdateWithoutSecretsInputObjectZodSchema = makeSchema();
