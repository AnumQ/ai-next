import Image from "next/image";
import React from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import GithubLink from "components/Links/GithubLink";
import LinkedInLink from "components/Links/LinkedInLink";
import TwitterLink from "components/Links/TwitterLink";
import s from "./Header.module.css";

export default function Header() {
  const [navItem, setNavItem] = React.useState(1);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function getWordsLargerThan5Char(text) {
    const lowerCased = text.toLocaleLowerCase();
    const words = lowerCased.split(" ");
    words.reverse();

    const trimmedWords = words.map((word) => word.trim());

    const longWords = trimmedWords.filter(
      (trimmedWord) => trimmedWord.length > 5
    );

    longWords.join(", ");
    const result = longWords.splice(0, -2);
    console.log(result);
    return result;
  }

  console.log(
    getWordsLargerThan5Char(
      "anumwill addlonger has a tendency to writing here, but not all longwords will but you are not"
    )
  );
  return (
    <>
      {/* <AnimatePresence>
        <motion.header
          className="s_header"
          initial={{ top: "-6rem" }}
          animate={{ top: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        > */}
      <header className={s.s_header}>
        <div className={s.s_header__block}>
          <div className={s.s_header__logo}>
            <a className="logo" href="">
              <Image
                src="/images/logo.svg"
                alt="Homeparge"
                width="104"
                height="78"
              />
            </a>
          </div>
          {/* <a className="s_header__menu_toggle"> */}
          <a
            className={
              !isMenuOpen
                ? s.s_header__menu_toggle
                : `${s.s_header__menu_toggle} ${s.is_clicked}`
            }
            onClick={() => toggleMenu()}
          >
            <span>Menu</span>
          </a>
        </div>
        {/* end s_header__block */}
        {/* <div className="row s_header__nav_wrap"> */}
        <div className={`${s.row} ${s.s_header__nav_wrap}`}>
          {/* <nav className="s_header__nav"> */}
          <nav className={s.s_header__nav}>
            <ul>
              <li
                className={navItem === 0 ? s.current : ""}
                onClick={() => setNavItem(0)}
              >
                <a href="#intro" className="smoothscroll">
                  Intro
                </a>
              </li>
              {/* <li><a href="#services" class="smoothscroll">What We Do</a></li> */}
              {/* <li><a href="#works" class="smoothscroll">My projects</a></li> */}
              <li
                className={navItem === 1 ? s.current : ""}
                onClick={() => setNavItem(1)}
              >
                <a href="#contact" className="smoothscroll">
                  Get In Touch
                </a>
              </li>
            </ul>
          </nav>
          <ul className={s.s_header__social}>
            <TwitterLink />
            <LinkedInLink />
            <GithubLink />
          </ul>
        </div>
        {/* end s_header__nav_wrap */}
        {/* </motion.header> */}
        {/* </AnimatePresence> */}
      </header>
    </>
  );
}
