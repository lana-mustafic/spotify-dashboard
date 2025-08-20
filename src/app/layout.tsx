// File: src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers"; // <-- Import the provider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Spotify Dashboard",
  description: "See your listening stats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Added a wrapper div to prevent hydration issues from browser extensions */}
        <div id="root">
          <Providers> {/* <-- Wrap children with it */}
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}