import "dotenv/config";
// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { text, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "@repo/common/zod";

export const users = pgTable("user", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 256 }).unique().notNull(),
  email: varchar("email", { length: 256 }).unique().notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(users);

// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users);

export type User = z.infer<typeof selectUserSchema>;
