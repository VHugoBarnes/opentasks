import { SignUpDto, SignUpValidation } from "@auth/dto";
import z from "zod";
import { HttpResponseBody, HttpResponseMessages } from "../response";

type ResponseUser = {
  email: string;
  name: string;
  username: string;
  id: string;
};
type RegisterResponseBody = HttpResponseBody<ResponseUser | undefined>;

export const registerApi = async (signupDto: SignUpDto): Promise<RegisterResponseBody> => {
  try {
    const parsedUser = z.object(SignUpValidation).safeParse(signupDto);

    if (!parsedUser.success) {
      console.error("From frontend!");
      return {
        ok: false,
        data: null,
        message: HttpResponseMessages.badRequest
      };
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(parsedUser.data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const body: RegisterResponseBody = await response.json();

    return body;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      data: null,
      message: HttpResponseMessages.serverError
    };
  }
};