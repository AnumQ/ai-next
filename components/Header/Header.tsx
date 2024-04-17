import Image from "next/image";
import React from "react";
import GithubIconLink from "../Links/GithubLink";
import LinkedInIcon from "../Links/LinkedInIcon";
import TwitterLink from "../Links/TwitterLink";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [navItem, setNavItem] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={styles.s_header}>
      <div className={styles.s_header_block}>
        <div className={styles.s_header_logo}>
          <Link href="/" className="logo">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>
      </div>
      {/* intro and about */}
      <div className={styles.s_header_block_centered}>
        <Navigation />
      </div>
      <div className={styles.s_header_block}>
        <div className={styles.s_header_social}>
          <ul className={styles.s_header_social}>
            <LinkedInIcon />
            <GithubIconLink />
          </ul>
        </div>
      </div>
    </header>
  );

  function Navigation() {
    return (
      <nav className={styles.s_header__nav}>
        <ul>
          <li
            className={navItem === 0 ? styles.current : ""}
            onClick={() => setNavItem(0)}
          >
            <a href="#intro" className="smoothscroll">
              Intro
            </a>
          </li>
          <li
            className={navItem === 1 ? styles.current : ""}
            onClick={() => setNavItem(1)}
          >
            <a href="#contact" className="smoothscroll">
              Get In Touch
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
