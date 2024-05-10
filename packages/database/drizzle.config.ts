import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
dotenv.config();

if (!process.env.DATABASE_URL) throw new Error("Env not found");

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
});
