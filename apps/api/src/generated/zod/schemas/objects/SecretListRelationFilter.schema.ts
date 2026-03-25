import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretWhereInputObjectSchema as SecretWhereInputObjectSchema } from './SecretWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SecretWhereInputObjectSchema).optional(),
  some: z.lazy(() => SecretWhereInputObjectSchema).optional(),
  none: z.lazy(() => SecretWhereInputObjectSchema).optional()
}).strict();
export const SecretListRelationFilterObjectSchema: z.ZodType<Prisma.SecretListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SecretListRelationFilter>;
export const SecretListRelationFilterObjectZodSchema = makeSchema();
