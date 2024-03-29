import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import React from "react";

export default async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <main className="p-4">
      {children}
    </main>
  );
};