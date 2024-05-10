import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { db } from ".";

if (!process.env.DATABASE_URL) throw new Error("Env not found");

const sql = postgres(process.env.DATABASE_URL, { max: 1 });

const runMigrate = async () => {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
    await sql.end();
  } catch (error) {}
};

void runMigrate();
