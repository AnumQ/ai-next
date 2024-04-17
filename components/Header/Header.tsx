import Image from "next/image";
import React from "react";
import GithubIconLink from "../Links/GithubLink";
import LinkedInIconLink from "../Links/LinkedInIcon";
import TwitterLink from "../Links/TwitterLink";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [navItem, setNavItem] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_block}>
        <div className={styles.header_logo}>
          <Link href="/" className="logo" aria-label="Home">
            <Image
              src="/images/logo.svg"
              alt="Anum Codes"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>
      </div>
      {/* intro and about */}
      <div className={styles.header_block_centered}>
        <Navigation />
      </div>
      <div className={styles.header_block}>
        <div className={styles.header_social}>
          <ul className={styles.header_social}>
            <LinkedInIconLink />
            <GithubIconLink />
          </ul>
        </div>
      </div>
    </header>
  );

  function Navigation() {
    return (
      <nav className={styles.header__nav}>
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
