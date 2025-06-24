import { z } from "zod";
import "dotenv/config";
const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_DEV: z.string().default("dev"),
  BASE_URL:z.string().default("http://localhost:3333")
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) throw new Error("erro nas variaveis de ambiente");

export const env = _env.data;
