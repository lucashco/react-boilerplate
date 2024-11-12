import {z} from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENV: z.union([
    z.literal('development'),
    z.literal('staging'),
    z.literal('production'),
  ]),
})

const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error(
    'Erro ao validar variáveis de ambiente:',
    parsedEnv.error.format()
  )
  process.exit(1)
}
export const env = parsedEnv.data
