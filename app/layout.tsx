import type { Metadata } from "next";
import "./globals.css";

import { Poppins, Roboto } from "next/font/google";

// Poppins for body
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Roboto for logo
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700"], // Bold for logo
});

export const metadata: Metadata = {
  title: "Mintellect - Tokenizing Patent Potential",
  description:
    "Mintellect – Transform your intellectual property into liquid digital assets. Tokenize, trade, and monetize patents securely on the blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
       <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&family=Tagesschrift&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
