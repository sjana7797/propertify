import NextAuth, { NextAuthResult } from "next-auth";
import { providers } from "./providers";
import lib from "../../../node_modules/next-auth/lib";
import types from "../../../node_modules/next-auth/lib/types";

export const { handlers, auth, signIn, signOut }: NextAuthResult = NextAuth({
  providers,
  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up",
  },

  session: {
    strategy: "jwt",
  },
});
