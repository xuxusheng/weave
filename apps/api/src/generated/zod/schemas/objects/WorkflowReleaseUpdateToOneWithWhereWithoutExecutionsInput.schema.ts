import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowReleaseWhereInputObjectSchema as WorkflowReleaseWhereInputObjectSchema } from './WorkflowReleaseWhereInput.schema';
import { WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema as WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUpdateWithoutExecutionsInput.schema';
import { WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema as WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema } from './WorkflowReleaseUncheckedUpdateWithoutExecutionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkflowReleaseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkflowReleaseUpdateWithoutExecutionsInputObjectSchema), z.lazy(() => WorkflowReleaseUncheckedUpdateWithoutExecutionsInputObjectSchema)])
}).strict();
export const WorkflowReleaseUpdateToOneWithWhereWithoutExecutionsInputObjectSchema: z.ZodType<Prisma.WorkflowReleaseUpdateToOneWithWhereWithoutExecutionsInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowReleaseUpdateToOneWithWhereWithoutExecutionsInput>;
export const WorkflowReleaseUpdateToOneWithWhereWithoutExecutionsInputObjectZodSchema = makeSchema();
