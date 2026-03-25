import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema';
import { WorkflowCreateWithoutReleasesInputObjectSchema as WorkflowCreateWithoutReleasesInputObjectSchema } from './WorkflowCreateWithoutReleasesInput.schema';
import { WorkflowUncheckedCreateWithoutReleasesInputObjectSchema as WorkflowUncheckedCreateWithoutReleasesInputObjectSchema } from './WorkflowUncheckedCreateWithoutReleasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkflowCreateWithoutReleasesInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutReleasesInputObjectSchema)])
}).strict();
export const WorkflowCreateOrConnectWithoutReleasesInputObjectSchema: z.ZodType<Prisma.WorkflowCreateOrConnectWithoutReleasesInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateOrConnectWithoutReleasesInput>;
export const WorkflowCreateOrConnectWithoutReleasesInputObjectZodSchema = makeSchema();
