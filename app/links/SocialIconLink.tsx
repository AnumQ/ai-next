import React from "react";
import Link from "next/link";

interface SocialIconLinkProps {
  href: string;
  icon: React.ReactNode;
  alt: string;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ href, icon, alt }) => {
  return (
    <li className="h-100 w-100 items-center ml-2">
      <a className="" href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className="sr-only">{alt}</span>
      </a>
    </li>
  );
};

export default SocialIconLink;
