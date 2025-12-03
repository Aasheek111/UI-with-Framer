import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const inter= Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Aashik Gautam",
  description: "Portfolio website of Aashik Gautam . Full stack web developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
