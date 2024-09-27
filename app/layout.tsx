// app/layout.tsx
// Root layout for all pages
import React from "react";
import { SITE_META_DESCRIPTION, SITE_TITLE } from "../components/constants";
import "./globals.css";
import { AnimatedHeader } from "./AnimatedHeader";
import Header from "../components/Header/Header";
import { Footer } from "./Footer";

export const metadata = {
  title: SITE_TITLE,
  description: SITE_META_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <AnimatedHeader />
        <main className="container mx-auto p-4">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
