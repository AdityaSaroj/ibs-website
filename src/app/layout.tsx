import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IBS Awareness - KGMU Research Initiative",
  description:
    "A comprehensive resource for understanding Irritable Bowel Syndrome (IBS), featuring research conducted at King George's Medical University.",
  keywords: [
    "IBS",
    "Irritable Bowel Syndrome",
    "KGMU",
    "Gastroenterology",
    "Medical Research",
    "Patient Education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-gray-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
