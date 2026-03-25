import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutReleasesInputObjectSchema as WorkflowCreateWithoutReleasesInputObjectSchema } from './WorkflowCreateWithoutReleasesInput.schema';
import { WorkflowUncheckedCreateWithoutReleasesInputObjectSchema as WorkflowUncheckedCreateWithoutReleasesInputObjectSchema } from './WorkflowUncheckedCreateWithoutReleasesInput.schema';
import { WorkflowCreateOrConnectWithoutReleasesInputObjectSchema as WorkflowCreateOrConnectWithoutReleasesInputObjectSchema } from './WorkflowCreateOrConnectWithoutReleasesInput.schema';
import { WorkflowUpsertWithoutReleasesInputObjectSchema as WorkflowUpsertWithoutReleasesInputObjectSchema } from './WorkflowUpsertWithoutReleasesInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowUpdateToOneWithWhereWithoutReleasesInputObjectSchema as WorkflowUpdateToOneWithWhereWithoutReleasesInputObjectSchema } from './WorkflowUpdateToOneWithWhereWithoutReleasesInput.schema';
import { WorkflowUpdateWithoutReleasesInputObjectSchema as WorkflowUpdateWithoutReleasesInputObjectSchema } from './WorkflowUpdateWithoutReleasesInput.schema';
import { WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema as WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema } from './WorkflowUncheckedUpdateWithoutReleasesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutReleasesInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutReleasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutReleasesInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkflowUpsertWithoutReleasesInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkflowUpdateToOneWithWhereWithoutReleasesInputObjectSchema), z.lazy(() => WorkflowUpdateWithoutReleasesInputObjectSchema), z.lazy(() => WorkflowUncheckedUpdateWithoutReleasesInputObjectSchema)]).optional()
}).strict();
export const WorkflowUpdateOneRequiredWithoutReleasesNestedInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutReleasesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateOneRequiredWithoutReleasesNestedInput>;
export const WorkflowUpdateOneRequiredWithoutReleasesNestedInputObjectZodSchema = makeSchema();
