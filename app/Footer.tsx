import React from "react";
import { COPYRIGHT } from "../components/constants";

export function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <footer className="p-4 text-neutral-300	text-center relative">
      <span className="">
        {COPYRIGHT} {YEAR}. All rights reserved
      </span>
    </footer>
  );
}
