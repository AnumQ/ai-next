import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Header from "../components/Header/Header";
import Intro from "../components/Sections/Intro";
import Contact from "../components/Sections/Contact";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  SITE_META_DESCRIPTION as META_CONTENT,
  SITE_TITLE,
} from "../components/constants";
import Footer from "../components/Footer/Footer";

export default function NewSite() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={META_CONTENT} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.upper} style={{ display: "none" }}>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.05 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Click me{" "}
          </motion.button>
        </div>
        <Intro />
        <Contact />
      </main>
    </div>
  );
}
