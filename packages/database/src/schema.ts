import "dotenv/config";
// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { text, pgTable, timestamp, varchar, serial } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "@repo/common/zod";

export const users = pgTable("user", {
  id: serial("id").primaryKey().notNull(),
  username: varchar("username", { length: 256 }).unique().notNull(),
  name: text("name"),
  email: varchar("email", { length: 256 }).unique().notNull(),
  password: text("password").notNull(),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: text("image"),
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
