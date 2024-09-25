"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function NavLink({
  children,
  onClick,
  selected = false,
  link,
}: {
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
  link?: string;
}) {
  return (
    <li
      className={`${
        selected ? "bg-selectedGray" : ""
      } h-full items-center flex transition-colors duration-300 ease-in-out `}
      onClick={onClick}
    >
      <a
        href={link}
        className={`text-[0.9rem] text-primaryTeal font-normal uppercase tracking-[.4em] text-white/60 px-11 hover:${
          selected ? "" : "text-white"
        } transition-colors duration-200 ease-in-out`}
      >
        {children}
      </a>
    </li>
  );
}

export function AnimatedHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  // Trigger the animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header
      className={`h-20 sticky top-0 z-50 bg-headerBlack shadow-md transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } border-b border-solid border-white/10`}
    >
      <div className="flex justify-between items-center h-full">
        {/* Logo container */}
        <div className="p-4">
          <div className="relative w-28 h-12">
            <Link href="/" className="logo" aria-label="Home">
              <Image
                src="/images/logo.svg"
                alt="Anum Codes"
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </Link>
          </div>
        </div>
        {/* Nav links in center */}
        <nav className=" h-full">
          <ul className="flex h-full border-l border-r border-solid border-white/10">
            <NavLink
              selected={currentSection === 1}
              onClick={() => setCurrentSection(1)}
              link="#intro"
            >
              Intro
            </NavLink>
            <NavLink
              selected={currentSection === 2}
              onClick={() => setCurrentSection(2)}
              link="#contact"
            >
              Contact
            </NavLink>
          </ul>
        </nav>
        <div className="w-20 h-10 bg-blue-100"></div>
      </div>
    </header>
  );
}
