import React from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { RegisterForm } from "./components/register-form";

export default function SignupPage() {
  return (
    <>
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Lorem Ipsum</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <RegisterForm />
      </CardContent>
    </>
  );
};