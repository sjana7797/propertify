import type { RequestHandler } from "express";
import { signUpSchema } from "~api/zod-schema/auth";
import { users } from "@repo/database/schema";
import { db } from "@repo/database/db";
import { ZodError } from "zod";
import { PostgresError } from "postgres";

export const signUp: RequestHandler = async (req, res) => {
  try {
    // parsing body
    const { email, password, username } = signUpSchema.parse(req.body);
    // inserting user to users table
    const user = await db
      .insert(users)
      .values({
        email,
        password,
        username,
        updatedAt: new Date(),
      })
      .returning({
        id: users.id,
        email: users.email,
        username: users.username,
      });
    return res.status(201).json(user[0]);
  } catch (error) {
    console.error(error, "err");

    if (error instanceof ZodError)
      return res.status(400).json({
        message: error.errors[0]?.message,
      });

    if (error instanceof PostgresError)
      return res.status(400).json({
        message: error.message,
      });
  }
};
