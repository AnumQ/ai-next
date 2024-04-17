import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Header from "../components/Header/Header";
import Intro from "../components/Sections/Intro";
import Contact from "../components/Sections/Contact";
import { useScroll } from "framer-motion";
import {
  SITE_META_DESCRIPTION as META_CONTENT,
  SITE_TITLE,
} from "../components/constants";
import Footer from "../components/Footer/Footer";
import { withImageProvider } from "../components/HOCs/withImageProvider";
import { getResponsiveImageData } from "../components/helpers/imageHelper";

export function Site() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={META_CONTENT} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Intro />
        <Contact />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export const bannerData = getResponsiveImageData(
  "banner",
  "webp",
  "jpg",
  "30rem",
  false
);

export default function Home() {
  const { scrollYProgress } = useScroll();

  const withImage = withImageProvider(Site);

  const logoData = getResponsiveImageData("logo", "png", "png", "48rem", true);

  const universalImages = { logoData: logoData, bannerData: bannerData };
  return withImage(universalImages);
}
