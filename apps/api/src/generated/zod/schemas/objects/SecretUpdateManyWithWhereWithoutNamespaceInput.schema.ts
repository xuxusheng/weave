import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretScalarWhereInputObjectSchema as SecretScalarWhereInputObjectSchema } from './SecretScalarWhereInput.schema';
import { SecretUpdateManyMutationInputObjectSchema as SecretUpdateManyMutationInputObjectSchema } from './SecretUpdateManyMutationInput.schema';
import { SecretUncheckedUpdateManyWithoutNamespaceInputObjectSchema as SecretUncheckedUpdateManyWithoutNamespaceInputObjectSchema } from './SecretUncheckedUpdateManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SecretScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SecretUpdateManyMutationInputObjectSchema), z.lazy(() => SecretUncheckedUpdateManyWithoutNamespaceInputObjectSchema)])
}).strict();
export const SecretUpdateManyWithWhereWithoutNamespaceInputObjectSchema: z.ZodType<Prisma.SecretUpdateManyWithWhereWithoutNamespaceInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretUpdateManyWithWhereWithoutNamespaceInput>;
export const SecretUpdateManyWithWhereWithoutNamespaceInputObjectZodSchema = makeSchema();
