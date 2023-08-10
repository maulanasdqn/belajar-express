import { config } from "dotenv";

config()

export const configEnv = {
  port: process.env.PORT,
  database: process.env.DATABASE_URL
}
