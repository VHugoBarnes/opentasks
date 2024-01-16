import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import styles from "./auth/auth.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "OpenTasks",
    template: "%s | OpenTasks"
  },
  description: "Open Source Task and Project management",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          formButtonPrimary: styles.primaryButton,
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-neutral-900 text-neutral-200`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
