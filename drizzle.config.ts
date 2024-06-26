import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./server/db/schema/expenses.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});