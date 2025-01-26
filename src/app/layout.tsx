import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../koffee-ui2/koffee-ui2.css"; // Include link to Koffee UI2 CSS
import Navbar from "@/components/Navbar";
import Bar from "@/koffee-ui2/components/Bar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Koffee UI 2",
  description: "Lightweight UI framework designed to streamline development of modern web interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased">
        <Bar 
          variant={"blue"}
          className="text-center"
        >
          Koffee UI2 is currently still in development (as of Jan 26 2025)
        </Bar>

        <Navbar/>
        {children}
      </body>
    </html>
  );
}
