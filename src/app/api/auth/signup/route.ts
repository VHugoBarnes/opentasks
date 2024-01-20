import z from "zod";

import { SignUpDto } from "@/auth/dto";
import { signup } from "@auth/services";
import { HttpSuccess } from "@shared/http/success";
import { HttpBadRequestException } from "@shared/http/exceptions";

export async function POST(request: Request): Promise<Response> {
  const req = await request.json();

  const parsedUser = z.object(SignUpDto).safeParse(req);

  if (!parsedUser.success) {
    return HttpBadRequestException();
  }

  const data = parsedUser.data;

  const signupResponse = await signup({
    email: data.email,
    name: data.name,
    password: data.password,
    username: data.username
  });

  if (signupResponse.ok === false) {
    return HttpBadRequestException();
  }

  return HttpSuccess(signupResponse.data?.user);
}