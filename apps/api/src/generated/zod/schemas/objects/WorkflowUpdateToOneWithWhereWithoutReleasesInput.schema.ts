import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema';
import { WorkflowUpdateWithoutReleasesInputObjectSchema as WorkflowUpdateWithoutReleasesInputObjectSchema } from './WorkflowUpdateWithoutReleasesInput.schema';
import { WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema as WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema } from './WorkflowUncheckedUpdateWithoutReleasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkflowUpdateWithoutReleasesInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema)])
}).strict();
export const WorkflowUpdateToOneWithWhereWithoutReleasesInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutReleasesInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateToOneWithWhereWithoutReleasesInput>;
export const WorkflowUpdateToOneWithWhereWithoutReleasesInputObjectZodSchema = makeSchema();
