import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseWhereUniqueInputObjectSchema as WorkflowReleaseWhereUniqueInputObjectSchema } from './WorkflowReleaseWhereUniqueInput.schema';
import { WorkflowReleaseCreateWithoutExecutionsInputObjectSchema as WorkflowReleaseCreateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseCreateWithoutExecutionsInput.schema';
import { WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema as WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUncheckedCreateWithoutExecutionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowReleaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowReleaseCreateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedCreateWithoutExecutionsInputObjectSchema)])
}).strict();
export const WorkflowReleaseCreateOrConnectWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseCreateOrConnectWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseCreateOrConnectWithoutExecutionsInput>;
export const WorkflowReleaseCreateOrConnectWithoutExecutionsInputObjectZodSchema = makeSchema();
