import { signIn } from "@/auth.config";

export const login = async (email: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    await signIn("credentials", { redirect: false, ...Object.fromEntries(formData) });

    return {
      ok: true,
      message: "[success]"
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "[server-error]"
    };
  }
};