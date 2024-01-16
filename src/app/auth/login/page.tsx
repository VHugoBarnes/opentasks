import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="grid place-content-center h-svh">
      <SignIn />
    </div>
  );
};