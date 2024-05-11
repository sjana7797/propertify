import { hash, genSalt } from "bcryptjs";
import jwt from "jsonwebtoken";
import type { User } from "@repo/database/schema";

export async function hashPassword(password: string): Promise<string> {
  // generating the salt
  const salt = await genSalt(10);

  //   hashing the password
  const hashedPassword = await hash(password, salt);

  return hashedPassword;
}

export function generateJwt(user: Pick<User, "id" | "email" | "username">) {
  const secret = process.env.JWT_SECRET;

  if (!secret) throw new Error("Secret not found");

  const token = jwt.sign(user, secret, {
    algorithm: "HS256",
    expiresIn: 60 * 60 * 24,
  });

  return token;
}
