import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema as WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUpdateWithoutExecutionsInput.schema';
import { WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema as WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUncheckedUpdateWithoutExecutionsInput.schema';
import { WorkflowReleaseCreateWithoutExecutionsInputObjectSchema as WorkflowReleaseCreateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseCreateWithoutExecutionsInput.schema';
import { WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema as WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUncheckedCreateWithoutExecutionsInput.schema';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './WorkflowReleaseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkflowReleaseCreateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema)]),
  where: z.lazy(() => WorkflowReleaseWhereInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseUpsertWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUpsertWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUpsertWithoutExecutionsInput>;
export const WorkflowReleaseUpsertWithoutExecutionsInputObjectZodSchema = makeSchema();
