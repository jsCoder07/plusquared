import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import NavBottom from "@/components/NavBottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Social Network",
  description: "Social network app built by Ade Thompson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} font-sans`}>
        <div className="bg-white w-full px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
          <Navbar />
        </div>
        <NavBottom/>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64" style={{backgroundColor:'#ecf0f3'}}>
          {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
