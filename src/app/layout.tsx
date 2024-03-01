import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StrayMate",
  description: "A community-driven platform connecting those looking to adopt with animals in need, ensuring every stray finds a loving home.",
};


import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
