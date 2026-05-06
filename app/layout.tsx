import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Delivery | Aurum Web Design",
  description:
    "Your digital presence is ready. Payment, revisions, and next steps from Aurum Web Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className={`${inter.className} flex min-h-[100dvh] flex-col bg-[#050505] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
