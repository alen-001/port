import type { Metadata } from "next";
import { serif, sans, mono } from "@/lib/fonts";
import { LenisProvider } from "@/lib/lenis-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alen Shaju",
  description: "Software engineer, builder of things, observer of sunsets.",
  openGraph: {
    title: "Alen Shaju",
    description: "Software engineer, builder of things, observer of sunsets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
