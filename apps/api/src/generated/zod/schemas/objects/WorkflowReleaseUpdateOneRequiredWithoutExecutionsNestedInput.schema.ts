import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseCreateWithoutExecutionsInputObjectSchema as WorkflowReleaseCreateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseCreateWithoutExecutionsInput.schema';
import { WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema as WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUncheckedCreateWithoutExecutionsInput.schema';
import { WorkflowReleaseCreateOrConnectWithoutExecutionsInputObjectSchema as WorkflowReleaseCreateOrConnectWithoutExecutionsInputObjectSchema } from './WorkflowReleaseCreateOrConnectWithoutExecutionsInput.schema';
import { WorkflowReleaseUpsertWithoutExecutionsInputObjectSchema as WorkflowReleaseUpsertWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUpsertWithoutExecutionsInput.schema';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './WorkflowReleaseWhereUniqueInput.schema';
import { WorkflowReleaseUpdateToOneWithWhereWithoutExecutionsInputObjectSchema as WorkflowReleaseUpdateToOneWithWhereWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUpdateToOneWithWhereWithoutExecutionsInput.schema';
import { WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema as WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUpdateWithoutExecutionsInput.schema';
import { WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema as WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUncheckedUpdateWithoutExecutionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowReleaseCreateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowReleaseCreateOrConnectWithoutExecutionsInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkflowReleaseUpsertWithoutExecutionsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkflowReleaseUpdateToOneWithWhereWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema)]).optional()
}).strict();
export const WorkflowReleaseUpdateOneRequiredWithoutExecutionsNestedInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUpdateOneRequiredWithoutExecutionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateOneRequiredWithoutExecutionsNestedInput>;
export const WorkflowReleaseUpdateOneRequiredWithoutExecutionsNestedInputObjectZodSchema = makeSchema();
