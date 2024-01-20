import z from "zod";

export const SignUpDto = {
  name: z.string().trim().min(2),
  username: z.string().trim().min(4),
  email: z.string().email(),
  password: z.string().min(8)
};