import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowCreateWithoutReleasesInputObjectSchema as WorkflowCreateWithoutReleasesInputObjectSchema } from './WorkflowCreateWithoutReleasesInput.schema';
import { WorkflowUncheckedCreateWithoutReleasesInputObjectSchema as WorkflowUncheckedCreateWithoutReleasesInputObjectSchema } from './WorkflowUncheckedCreateWithoutReleasesInput.schema';
import { WorkflowCreateOrConnectWithoutReleasesInputObjectSchema as WorkflowCreateOrConnectWithoutReleasesInputObjectSchema } from './WorkflowCreateOrConnectWithoutReleasesInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './WorkflowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkflowCreateWithoutReleasesInputObjectSchema), z.lazy(() => WorkflowUncheckedCreateWithoutReleasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkflowCreateOrConnectWithoutReleasesInputObjectSchema).optional(),
  connect: z.lazy(() => WorkflowWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkflowCreateNestedOneWithoutReleasesInputObjectSchema: z.ZodType<Prisma.WorkflowCreateNestedOneWithoutReleasesInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateNestedOneWithoutReleasesInput>;
export const WorkflowCreateNestedOneWithoutReleasesInputObjectZodSchema = makeSchema();
