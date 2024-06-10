import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OLX.kz",
  description: " - крупнейший сервис объявлений в Казахстане.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
