import React from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Lorem Ipsum</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <LoginForm />
      </CardContent>
    </>
  );
};