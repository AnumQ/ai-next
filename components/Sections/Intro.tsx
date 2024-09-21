import useData from "../hooks/useData";
import ArrowSVG from "../SVGs/ArrowSVG";
import React from "react";
import s from "./Intro.module.css";
import { motion } from "framer-motion";
import { useImages } from "../context/ImageContext";
import { ResponsiveImage } from "./ImageView";
import { bannerData } from "../../pages";

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
    transition: { ease: "backIn", duration: 0.6, delay: 0.1 },
  },
  hideBackgroundImage: { opacity: 0, scale: 0.96 },
  showBackgroundImage: {
    opacity: 0.25,
    scale: 1,
    transition: { ease: [0.17, 0.62, 0.2, 0.9], duration: 0.9, delay: 0.5 },
  },
};

export default function Intro() {
  const { introData: data, constants } = useData();

  const { bannerMobileSrc, bannerDesktopSrc } = useImages();

  return (
    <section id="intro" className={`${s.s_intro}`}>
      <div className={s.row}>
        <motion.div
          variants={animations}
          initial={animations.hideBackgroundImage}
          animate={animations.showBackgroundImage}
          className={s.s_intro_background}
        >
          <ResponsiveImage
            image={bannerData}
            mobileSrc={bannerMobileSrc}
            desktopSrc={bannerDesktopSrc}
          />
        </motion.div>
        <div className={s.column}>
          <title></title>
          <motion.div
            className={s.s_intro__top_block}
            variants={animations}
            initial={animations.hidden}
            animate={animations.showTopBlock}
          >
            <h1 className={s.s_intro__text}>
              {data.titleIntro1} <br />
              <span>{data.titleIntro2}</span>
            </h1>
          </motion.div>
        </div>
      </div>
      <div className={`${s.row} ${s.row_x_center}`}>
        <motion.div
          variants={animations}
          initial={animations.hidden}
          animate={animations.showIntroAbout}
          className={`${s.column} ${s.s_intro__about}`}
        >
          <h2 className={s.s_intro__about_title}>{data.titleAbout}</h2>
          <p className={s.intro__about_description}>
            {data.titleDescription1}
            <b>{data.titleDescription2}</b>
          </p>
          <p>{data.titleDescription3}</p>
        </motion.div>
      </div>
    </section>
  );
}
