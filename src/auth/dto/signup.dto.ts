import z from "zod";
export interface SignUpDto {
  name: string;
  username: string;
  email: string;
  password: string;
};

export const SignUpValidation = {
  name: z.string().trim().min(2),
  username: z.string().trim().min(4),
  email: z.string().email(),
  password: z.string().min(8)
};