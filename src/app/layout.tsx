import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitexen Fintech MVNO · Proposal",
  description:
    "A fintech-led MVNO leveraging Bitexen's cryptocurrency exchange, 2M+ active users, and digital wallet ecosystem — unlike anything in Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
