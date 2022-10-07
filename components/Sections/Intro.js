import useData from "components/hooks/useData";
import ArrowSVG from "components/SVGs/ArrowSVG";
import React from "react";
import s from "./Intro.module.css";
import { motion } from "framer-motion";

export default function Intro() {
  const { introData: data, constants } = useData();

  const animations = {
    hidden: { opacity: 0, top: 40 },
    showTopBlock: {
      opacity: 1,
      top: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4,
        delay: 0.25,
      },
    },
    showIntroAbout: {
      opacity: 1,
      top: 0,
      transition: { ease: "backIn", duration: 0.6, delay: 0.4 },
    },
    hiddenBackgroundImage: { opacity: 0, scale: 0.96 },
    showBackgroundImage: {
      opacity: 0.25,
      scale: 1,
      transition: { ease: "easeOut", duration: 2.6, delay: 0.5 },
    },
  };

  return (
    <section id="intro" className={`${s.s_intro}`}>
      <div className={s.row}>
        <motion.div
          variants={animations}
          initial="hiddenBackgroundImage"
          animate="showBackgroundImage"
          className={s.s_intro_background}
        />
        <div className={s.column}>
          <motion.div
            className={s.s_intro__top_block}
            variants={animations}
            initial="hidden"
            animate="showTopBlock"
          >
            <h1 className={s.s_intro__text}>
              {data.titleIntro1} <br />
              <span>{data.titleIntro2}</span>
            </h1>
            <a href="#contact" className={s.s_intro__scroll_down}>
              <span>{constants.scrollDown}</span>
              <ArrowSVG />
            </a>
          </motion.div>
        </div>
      </div>
      <div className={`${s.row} ${s.row_x_center}`}>
        <motion.div
          variants={animations}
          initial="hidden"
          animate="showIntroAbout"
          className={`${s.column} ${s.s_intro__about}`}
        >
          <h2 className={s.s_intro__about_title}>{data.titleAbout}</h2>
          <p>
            {data.titleDescription1}
            <b>{data.titleDescription2}</b>
          </p>
          <p>{data.titleDescription3}</p>
        </motion.div>
      </div>
    </section>
  );
}
