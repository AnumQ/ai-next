"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function AnimatedHeader() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-headerBlack shadow-md transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        <div className="relative w-28 h-12">
          <Link href="/" className="logo" aria-label="Home">
            <Image
              src="/images/logo.svg"
              alt="Anum Codes"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="w-20 h-10 bg-blue-100"></div>
      </div>
    </header>
  );
}
