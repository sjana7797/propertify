import type { RequestHandler } from "express";
import { signUpSchema } from "~api/zod-schema/auth";
import { insertUserSchema, users } from "@repo/database/schema";
import { db } from "@repo/database/db";
import { ZodError } from "zod";
import { PostgresError } from "postgres";
import { generateJwt, hashPassword } from "~api/utils/auth";
import { ProError } from "~api/middleware/errorHandler";

export const signUp: RequestHandler = async (req, res, next) => {
  try {
    // parsing body
    const { email, password, username } = insertUserSchema.parse(req.body);

    // hash password
    const hashedPassword = await hashPassword(password);

    // inserting user to users table
    const user = await db
      .insert(users)
      .values({
        email,
        password: hashedPassword,
        username,
        updatedAt: new Date(),
      })
      .returning({
        id: users.id,
        email: users.email,
        username: users.username,
      });

    if (!user[0]) throw new Error("User not created");

    const token = generateJwt(user[0]);

    res.cookie("token", token);

    return res.status(201).json(user[0]);
  } catch (error) {
    let err;

    if (error instanceof ZodError) {
      err = new ProError(400, error.errors[0]?.message);
    } else if (error instanceof PostgresError) {
      err = new ProError(400, error.message);
    } else {
      err = new ProError(500);
    }

    next(err);
  }
};
