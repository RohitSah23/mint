import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";

// Configure Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify desired font weights
});

export const metadata: Metadata = {
  title: "Mintellect - Tokenizing Patent Potential",
  description: "Mintellect – Transform your intellectual property into liquid digital assets. Tokenize, trade, and monetize patents securely on the blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}