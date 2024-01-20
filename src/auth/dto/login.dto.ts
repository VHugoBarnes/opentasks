import z from "zod";

export const LoginDto = {
  email: z.string().email(),
  password: z.string().min(8)
};