import Link from "next/link";
import React from "react";

export function ALink({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="leading-7 [&:not(:first-child)]:mt-6 underline text-muted-foreground">
      {children}
    </Link>
  );
}
