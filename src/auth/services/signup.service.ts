import z from "zod";
import bcryptjs from "bcryptjs";
import { createUser } from "@/user/services";

interface SignupUser {
  name: string;
  username: string;
  email: string;
  password: string;
};

export const signup = async (signupUser: SignupUser) => {
  const parsedUser = z
    .object({
      name: z.string().trim().min(2),
      username: z.string().trim().min(4),
      email: z.string().email(),
      password: z.string().min(8)
    })
    .safeParse(signupUser);

  if (!parsedUser.success) {
    return {
      ok: false,
      message: "[parsing-error]",
      data: null
    };
  }

  const data = parsedUser.data;

  try {
    const { password, ...rest } = data;
    const user = await createUser({
      ...rest,
      password: bcryptjs.hashSync(password, 10)
    });

    // TODO: send email to activate account
    return {
      ok: true,
      message: "[success]",
      data: {
        user: user
      }
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "[server-error]",
      data: null
    };
  }
};