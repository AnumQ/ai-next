"use client";
import { motion } from "framer-motion";
import { ResponsiveImage } from "../components/Sections/ImageView";
import { useImages } from "../components/context/ImageContext";
import useData from "../components/hooks/useData";
import { getResponsiveImageData } from "../components/helpers/imageHelper";

export const bannerData = getResponsiveImageData(
  "banner",
  "webp",
  "jpg",
  "30rem",
  false
);
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
    <section id="intro" className={``}>
      <div className={``}>
        <motion.div
          variants={animations}
          initial={animations.hideBackgroundImage}
          animate={animations.showBackgroundImage}
          className={`bg-no-repeat bg-cover w-full absolute top-4 right-0 bottom-0 left-0 opacity-30`}
        >
          <ResponsiveImage
            image={bannerData}
            mobileSrc={bannerMobileSrc}
            desktopSrc={bannerDesktopSrc}
          />
        </motion.div>
        <div className={``}>
          <title></title>
          <motion.div
            className={``}
            variants={animations}
            initial={animations.hidden}
            animate={animations.showTopBlock}
          >
            <h1 className={``}>
              {data.titleIntro1} <br />
              <span>{data.titleIntro2}</span>
            </h1>
          </motion.div>
        </div>
      </div>
      <div className={``}>
        <motion.div
          variants={animations}
          initial={animations.hidden}
          animate={animations.showIntroAbout}
          className={``}
        >
          <h2 className={``}>{data.titleAbout}</h2>
          <p className={``}>
            {data.titleDescription1}
            <b>{data.titleDescription2}</b>
          </p>
          <p>{data.titleDescription3}</p>
        </motion.div>
      </div>
    </section>
  );
}
