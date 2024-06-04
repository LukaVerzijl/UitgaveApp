import { drizzle } from "drizzle-orm/better-sqlite3";
import postgres from "postgres";

const queryClient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryClient);