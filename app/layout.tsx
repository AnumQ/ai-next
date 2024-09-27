// app/layout.tsx
// Root layout for all pages
import React from "react";
import {
  COPYRIGHT,
  SITE_META_DESCRIPTION,
  SITE_TITLE,
} from "../components/constants";
import "./globals.css";
import { AnimatedHeader } from "./AnimatedHeader";
import Header from "../components/Header/Header";

export const metadata = {
  title: SITE_TITLE,
  description: SITE_META_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const YEAR = new Date().getFullYear();
  return (
    <html lang="en">
      <body className="bg-black">
        <AnimatedHeader />
        <main className="container mx-auto p-4">{children}</main>
        <footer className="p-4 text-neutral-500	text-center relative w-100 ">
          <span className="">
            {COPYRIGHT} {YEAR}. All rights reserved
          </span>
          {/* <p>&copy; 2024 My Next.js App. All rights reserved.</p> */}
        </footer>
      </body>
    </html>
  );
}
