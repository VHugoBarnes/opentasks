"use server";

import { signIn } from "@/auth.config";

export const loginApi = async (email: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    await signIn("credentials", { redirect: false, ...Object.fromEntries(formData) });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};