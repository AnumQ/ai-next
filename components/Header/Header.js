import Image from "next/image";
import React from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import GithubLink from "components/Links/GithubLink";
import LinkedInLink from "components/Links/LinkedInLink";
import TwitterLink from "components/Links/TwitterLink";

export default function Header() {
  return (
    <>
      {/* <AnimatePresence>
        <motion.header
          className="s-header"
          initial={{ top: "-6rem" }}
          animate={{ top: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        > */}
      <header className="s-header">
        <div className="s-header__block">
          <div className="s-header__logo">
            <a className="logo" href="">
              <Image
                src="/images/logo.svg"
                alt="Homeparge"
                width="104"
                height="78"
              />
            </a>
          </div>
          {/* <a className="s-header__menu-toggle">
          <span>Menu</span>
        </a> */}
        </div>
        {/* end s-header__block */}
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current">
                <a href="#intro" className="smoothscroll">
                  Intro
                </a>
              </li>
              {/* <li><a href="#services" class="smoothscroll">What We Do</a></li> */}
              {/* <li><a href="#works" class="smoothscroll">My projects</a></li> */}
              <li>
                <a href="#contact" className="smoothscroll">
                  Get In Touch
                </a>
              </li>
            </ul>
          </nav>
          <ul className="s-header__social">
            <TwitterLink />
            <LinkedInLink />
            <GithubLink />
          </ul>
        </div>
        {/* end s-header__nav-wrap */}
        {/* </motion.header> */}
        {/* </AnimatePresence> */}
      </header>
    </>
  );
}
