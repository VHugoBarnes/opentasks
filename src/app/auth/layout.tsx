import { Logo } from "@/shared/components/logo";
import { Card } from "@/shared/components/ui/card";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-6 space-y-20">
      <Logo />

      <div className="flex justify-center items-center">
        <Card className="w-full md:w-2/3 lg:w-1/2">
          {children}
        </Card>
      </div>
    </main>
  );
};