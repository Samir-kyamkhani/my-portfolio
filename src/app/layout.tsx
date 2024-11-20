// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent";
import Footer from "@/components/Footer";
import HydrationError from "@/components/HydrationError";
import NextTopLoader from 'nextjs-toploader';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SamirKayamkhani.dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <HydrationError>
          <HeaderComponent />
          <NextTopLoader />
          {children}
          <Footer />
        </HydrationError>
      </body>
    </html>
  );
}
