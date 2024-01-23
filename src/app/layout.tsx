import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "@shared/components/providers";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

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
      <body className={`${roboto.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
