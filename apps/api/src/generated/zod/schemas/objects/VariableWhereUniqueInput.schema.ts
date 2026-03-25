import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableNamespaceIdKeyCompoundUniqueInputObjectSchema as VariableNamespaceIdKeyCompoundUniqueInputObjectSchema } from './VariableNamespaceIdKeyCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  namespaceId_key: z.lazy(() => VariableNamespaceIdKeyCompoundUniqueInputObjectSchema).optional()
}).strict();
export const VariableWhereUniqueInputObjectSchema: z.ZodType<Prisma.VariableWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableWhereUniqueInput>;
export const VariableWhereUniqueInputObjectZodSchema = makeSchema();
