import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkflowUpdateOneRequiredWithoutReleasesNestedInputObjectSchema as WorkflowUpdateOneRequiredWithoutReleasesNestedInputObjectSchema } from './WorkflowUpdateOneRequiredWithoutReleasesNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  yaml: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  publishedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  workflow: z.lazy(() => WorkflowUpdateOneRequiredWithoutReleasesNestedInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUpdateWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateWithoutExecutionsInput>;
export const WorkflowReleaseUpdateWithoutExecutionsInputObjectZodSchema = makeSchema();
