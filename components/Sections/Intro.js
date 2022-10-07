import useData from "components/hooks/useData";
import ArrowSVG from "components/SVGs/ArrowSVG";
import React from "react";
import s from "./Intro.module.css";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

export default function Intro() {
  const { introData: data, constants } = useData();

  return (
    <section id="intro" className={`${s.s_intro}`}>
      <div className={s.row}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.3,
          }}
          transition={{ ease: "easeIn", duration: 1, delay: 1.5 }}
          className={s.s_intro_background}
        ></motion.div>
        <div className={s.column}>
          <AnimatePresence>
            <motion.div
              className={s.s_intro__top_block}
              initial={{ top: 40 }}
              animate={{
                top: 0,
                opacity: 1,
              }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
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
          </AnimatePresence>
        </div>
      </div>
      <div className={`${s.row} ${s.row_x_center}`}>
        <AnimatePresence>
          <motion.div
            initial={{ top: 40, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.6, delay: 0.85 }}
            className={`${s.column} ${s.s_intro__about}`}
          >
            <h2 className={s.s_intro__about_title}>{data.titleAbout}</h2>
            <p>
              {data.titleDescription1}
              <b>{data.titleDescription2}</b>
            </p>
            <p>{data.titleDescription3}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
