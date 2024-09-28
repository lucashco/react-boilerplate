import {z} from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Insert 6 characters at least'),
})

export type LoginSchema = z.infer<typeof loginSchema>
