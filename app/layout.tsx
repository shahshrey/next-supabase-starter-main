import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const fontSans = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const fontDisplay = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harbor — Your work, finally at rest",
  description:
    "Plan, prioritize, and finish what matters. Harbor is a calm task workspace for people who ship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
