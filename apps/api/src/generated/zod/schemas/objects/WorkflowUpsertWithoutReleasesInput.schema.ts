import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowUpdateWithoutReleasesInputObjectSchema as WorkflowUpdateWithoutReleasesInputObjectSchema } from './WorkflowUpdateWithoutReleasesInput.schema';
import { WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema as WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema } from './WorkflowUncheckedUpdateWithoutReleasesInput.schema';
import { WorkflowCreateWithoutReleasesInputObjectSchema as WorkflowCreateWithoutReleasesInputObjectSchema } from './WorkflowCreateWithoutReleasesInput.schema';
import { WorkflowUncheckedCreateWithoutReleasesInputObjectSchema as WorkflowUncheckedCreateWithoutReleasesInputObjectSchema } from './WorkflowUncheckedCreateWithoutReleasesInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './WorkflowWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkflowUpdateWithoutReleasesInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowCreateWithoutReleasesInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutReleasesInputObjectSchema)]),
  where: z.lazy(() => WorkflowWhereInputObjectSchema).optional()
}).strict();
export const WorkflowUpsertWithoutReleasesInputObjectSchema: z.ZodType<Prisma.WorkflowUpsertWithoutReleasesInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpsertWithoutReleasesInput>;
export const WorkflowUpsertWithoutReleasesInputObjectZodSchema = makeSchema();
