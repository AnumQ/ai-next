import React from "react";
import Link from "next/link";
import styles from "./Link.module.css";

interface SocialIconLinkProps {
  href: string;
  icon: React.ReactNode;
  alt: string;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ href, icon, alt }) => {
  return (
    <li>
      <Link href={href}>
        <div className={styles.icon_container}>{icon}</div>
        <span className="screen_reader_text">{alt}</span>
      </Link>
    </li>
  );
};

export default SocialIconLink;
