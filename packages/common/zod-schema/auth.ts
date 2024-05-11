import z from "zod";

export const signUpSchema = z.object({
  username: z.string().min(3, {
    message: "username should be minimum 3 characters",
  }),
  password: z.string().min(8, {
    message: "username should be minimum 8 characters",
  }),
  email: z.string().email(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
