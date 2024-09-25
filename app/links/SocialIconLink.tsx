import React from "react";
import Link from "next/link";

interface SocialIconLinkProps {
  href: string;
  icon: React.ReactNode;
  alt: string;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ href, icon, alt }) => {
  return (
    <li className="h-100 items-center px-2">
      <a
        className="w-10 h-full"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        <span className="sr-only">{alt}</span>
      </a>
    </li>
  );
};

export default SocialIconLink;
