import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import React from "react";
import { Header } from "components/Header/Header";
import { Intro } from "components/Sections/Intro";
import { Contact } from "components/Sections/Contact";

export default function Home() {
  useEffect(() => {
    // console.log("coming here");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Anum Codes | Software Engineer</title>
        <meta
          name="description"
          content="frontend utvikler mobil utvikler developer utvikler react nextjs typescript javascript utvikler"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="preloader">
          <div id="loader"></div>
        </div>
        <div id="s-pagewrap">
          <Header />
          {/* end s-header */}
          <Intro />
          {/* end s-intro */}
          <Contact />
          {/* end s-contact */}
        </div>
        {/* end -s-pagewrap */}

        <div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />{" "}
                <button
                  className="pswp__button pswp__button--share"
                  title="Share"
                />{" "}
                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />{" "}
                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              />{" "}
              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/anumio.svg" alt="anum Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
