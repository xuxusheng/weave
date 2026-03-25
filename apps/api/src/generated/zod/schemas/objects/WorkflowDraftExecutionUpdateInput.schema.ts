import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkflowUpdateOneRequiredWithoutExecutionsNestedInputObjectSchema as WorkflowUpdateOneRequiredWithoutExecutionsNestedInputObjectSchema } from './WorkflowUpdateOneRequiredWithoutExecutionsNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  kestraExecId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  inputValues: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  state: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  taskRuns: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  triggeredBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  endedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  workflow: z.lazy(() => WorkflowUpdateOneRequiredWithoutExecutionsNestedInputObjectSchema).optional()
}).strict();
export const WorkflowDraftExecutionUpdateInputObjectSchema: z.ZodType<Prisma.WorkflowDraftExecutionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowDraftExecutionUpdateInput>;
export const WorkflowDraftExecutionUpdateInputObjectZodSchema = makeSchema();
