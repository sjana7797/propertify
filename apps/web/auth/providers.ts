import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import { hashPassword } from "@repo/common/utils/auth";
import { signUpSchema } from "@repo/common/zod-schema/auth";
import { users } from "@repo/database/schema";
import { db } from "@repo/database/db";
import { eq, and } from "@repo/database/drizzle-orm";

const credentialProvider = Credentials({
  credentials: {
    email: {},
    password: {},
    username: {},
  },

  authorize: async (credentials) => {
    let user = null;

    const { email, password, username } = signUpSchema.parse(credentials);

    // logic to salt and hash password
    const pwHash = await hashPassword(password);

    // logic to verify if user exists
    // const selectedUsers = db
    //   .select()
    //   .from(users)
    //   .where(
    //     and(
    //       eq(users.email, email),
    //       eq(users.password, pwHash),
    //       eq(users.username, username),
    //     ),
    //   );

    // if (!selectedUsers[0]) {
    //   // No user found, so this is their first attempt to login
    //   // meaning this is also the place you could do registration
    //   throw new Error("User not found.");
    // }

    // user = selectedUsers[0];

    // return user object with the their profile data
    return user;
  },
});

export const providers: Provider[] = [credentialProvider];
