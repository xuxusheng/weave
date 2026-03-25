import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  workflowId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  message: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WorkflowDraftUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.WorkflowDraftUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftUncheckedUpdateManyInput>;
export const WorkflowDraftUncheckedUpdateManyInputObjectZodSchema = makeSchema();
