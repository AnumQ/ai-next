import Image from "next/image";
import React from "react";
import GithubIconLink from "../Links/GithubLink";
import LinkedInIconLink from "../Links/LinkedInLink";
import TwitterLink from "../Links/TwitterLink";
import headerOld from "./HeaderOld.module.css";
// import header from "./Header.module.css";
import headerScss from "./Header.module.scss";

export default function Header() {
  const [navItem, setNavItem] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HeaderNew = (
    <header className={headerScss.s_header}>
      <div className={headerScss.s_header_block}>
        <div className={headerScss.s_header_logo}>
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
      <div className={headerScss.s_header_block_centered}>
        {renderNavItems()}
      </div>
      <div className={headerScss.s_header_block}>
        <div className={headerScss.s_header_social}>
          <ul className={headerScss.s_header_social}>
            {/* <TwitterLink /> */}
            <LinkedInIconLink />
            <GithubIconLink />
          </ul>
        </div>
      </div>
    </header>
  );
  return (
    <>
      {/* <AnimatePresence>
              <motion.header
                className="s_header"
                initial={{ top: "-6rem" }}
                animate={{ top: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              > */}
      {/* {HeaderOldComponent()} */}
      {HeaderNew}
    </>
  );

  // is not in use - but saved in case
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
          {renderNavItemsOld()}
          <ul className={headerOld.s_header__social}>
            <TwitterLink />
            <LinkedInIconLink />
            <GithubIconLink />
          </ul>
        </div>
        {/* end s_header__nav_wrap */}
        {/* </motion.header> */}
        {/* </AnimatePresence> */}
      </header>
    );
  }

  function renderNavItemsOld() {
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
          {/* <li><a href="#services" class="smoothscroll">What We Do</a></li> */}
          {/* <li><a href="#works" class="smoothscroll">My projects</a></li> */}
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
