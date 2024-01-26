import React from "react";
import { signOut } from "@/auth.config";
import { Button } from "@/shared/components/ui/button";

export default function HomePage() {
  return (
    <div>
      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <Button>Sign out</Button>
      </form>
    </div>
  );
};