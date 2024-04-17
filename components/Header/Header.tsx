import Image from "next/image";
import React from "react";
import GithubIconLink from "../Links/GithubLink";
import LinkedInIconLink from "../Links/LinkedInLink";
import TwitterLink from "../Links/TwitterLink";
import headerScss from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [navItem, setNavItem] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={headerScss.s_header}>
      <div className={headerScss.s_header_block}>
        <div className={headerScss.s_header_logo}>
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
      <div className={headerScss.s_header_block_centered}>
        {renderNavItems()}
      </div>
      <div className={headerScss.s_header_block}>
        <div className={headerScss.s_header_social}>
          <ul className={headerScss.s_header_social}>
            <LinkedInIconLink />
            <GithubIconLink />
          </ul>
        </div>
      </div>
    </header>
  );

  function renderNavItems() {
    return (
      <nav className={headerScss.s_header__nav}>
        <ul>
          <li
            className={navItem === 0 ? headerScss.current : ""}
            onClick={() => setNavItem(0)}
          >
            <a href="#intro" className="smoothscroll">
              Intro
            </a>
          </li>
          <li
            className={navItem === 1 ? headerScss.current : ""}
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
