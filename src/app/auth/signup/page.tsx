import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="grid place-content-center h-svh">
      <SignUp
        signInUrl="/auth/login"
      />
    </div>
  );
};