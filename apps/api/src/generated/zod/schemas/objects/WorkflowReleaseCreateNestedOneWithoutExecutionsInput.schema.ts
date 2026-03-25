import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseCreateWithoutExecutionsInputObjectSchema as WorkflowReleaseCreateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseCreateWithoutExecutionsInput.schema';
import { WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema as WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUncheckedCreateWithoutExecutionsInput.schema';
import { WorkflowReleaseCreateOrConnectWithoutExecutionsInputObjectSchema as WorkflowReleaseCreateOrConnectWithoutExecutionsInputObjectSchema } from './WorkflowReleaseCreateOrConnectWithoutExecutionsInput.schema';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './WorkflowReleaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowReleaseCreateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowReleaseCreateOrConnectWithoutExecutionsInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkflowReleaseCreateNestedOneWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseCreateNestedOneWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateNestedOneWithoutExecutionsInput>;
export const WorkflowReleaseCreateNestedOneWithoutExecutionsInputObjectZodSchema = makeSchema();
