import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${openSans.className} bg-background dark:bg-backgroundBlack text-foreground dark:text-foregroundBlack`}>{children}</body>
    </html>
  );
}
