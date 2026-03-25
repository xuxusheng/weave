import * as z from 'zod';
// prettier-ignore
export const SecretInputSchema = z.object({
    id: z.string(),
    namespaceId: z.string(),
    key: z.string(),
    value: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    namespace: z.unknown()
}).strict();

export type SecretInputType = z.infer<typeof SecretInputSchema>;
