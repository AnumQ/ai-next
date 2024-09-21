// app/layout.tsx
// Root layout for all pages
import React from "react";
import { SITE_META_DESCRIPTION, SITE_TITLE } from "../components/constants";
import "./globals.css";
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
  return (
    <html lang="en">
      <body className="bg-black">
        {/* <header className="bg-blue-600 p-4 text-red">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">My Next.js App</h1>
          </div>
        </header> */}
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-900 p-4 text-white text-center">
          <p>&copy; 2024 My Next.js App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
