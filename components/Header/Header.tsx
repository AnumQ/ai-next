import Image from "next/image";
import React from "react";
import GithubLink from "../Links/GithubLink";
import LinkedInLink from "../Links/LinkedInLink";
import TwitterLink from "../Links/TwitterLink";
import headerOld from "./HeaderOld.module.css";
import header from "./Header.module.css";

// import "./header.scss";
export default function Header() {
  const [navItem, setNavItem] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* <AnimatePresence>
              <motion.header
                className="s_header"
                initial={{ top: "-6rem" }}
                animate={{ top: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              > */}
      <header className={header.s_header}>
        <div className={header.s_header_block}>
          <div className={header.s_header_logo}>
            <a className="logo" href="">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
        </div>

        {/* intro and about */}
        <div className={header.s_header_block}></div>
        <div className={header.s_header_block}>
          <div className={header.s_header_social}>
            <ul className={header.s_header_social}>
              {/* <TwitterLink /> */}
              <LinkedInLink />
              <GithubLink />
            </ul>
          </div>
        </div>
      </header>
      {HeaderOldComponent()}
    </>
  );

  function HeaderOldComponent() {
    return (
      <header className={headerOld.s_header}>
        <div className={headerOld.s_header__block}>
          <div className={headerOld.s_header__logo}>
            <a className="logo" href="">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
          {/* <a className="s_header__menu_toggle"> */}
          <div className={headerOld.s_header__socialmenu}></div>
          {/* <a
            className={
              !isMenuOpen
                ? s.s_header__menu_toggle
                : `${s.s_header__menu_toggle} ${s.is_clicked}`
            }
            onClick={() => toggleMenu()}
          >
            <span>Menu</span>
          </a> */}
        </div>
        {/* end s_header__block */}
        {/* <div className="row s_header__nav_wrap"> */}
        <div className={`${headerOld.row} ${headerOld.s_header__nav_wrap}`}>
          {/* <nav className="s_header__nav"> */}
          {renderNavItems()}
          <ul className={headerOld.s_header__social}>
            <TwitterLink />
            <LinkedInLink />
            <GithubLink />
          </ul>
        </div>
        {/* end s_header__nav_wrap */}
        {/* </motion.header> */}
        {/* </AnimatePresence> */}
      </header>
    );
  }

  function renderNavItems() {
    return (
      <nav className={headerOld.s_header__nav}>
        <ul>
          <li
            className={navItem === 0 ? headerOld.current : ""}
            onClick={() => setNavItem(0)}
          >
            <a href="#intro" className="smoothscroll">
              Intro
            </a>
          </li>
          {/* <li><a href="#services" class="smoothscroll">What We Do</a></li> */}
          {/* <li><a href="#works" class="smoothscroll">My projects</a></li> */}
          <li
            className={navItem === 1 ? headerOld.current : ""}
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
