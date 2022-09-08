import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import React from "react";
import { TwitterLink } from "components/Links/TwitterLink";
import { LinkedInLink } from "components/Links/LinkedInLink";
import { GithubLink } from "components/Links/GithubLink";
import {
  LINKEDLN_URL,
  TWITTER_URL,
  GITHUB_URL,
  EMAIL,
} from "components/constants";
import { Header } from "components/Header/Header";

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
          <>
            <Header />
            {/* end s-header */}
          </>

          <>
            <section id="intro" className="s-intro target-section">
              <div className="row">
                <div className="column">
                  <div className="s-intro__top-block">
                    <span className="s-intro__bg" />
                    <h1 className="s-intro__text">
                      Mobile- &amp; Frontend <br />
                      <span> Developer.</span>
                    </h1>
                    <a
                      href="#contact"
                      className="s-intro__scroll-down smoothscroll"
                    >
                      <span>Scroll Down</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{
                          fill: "rgba(0, 0, 0, 1)",
                          transform: "rotate(180deg)",
                          msFilter:
                            "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)",
                        }}
                      >
                        <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row row-x-center s-intro__about-wrap">
                <div className="column s-intro__about">
                  <h2 className="s-intro__about-title">
                    Hello, I am Anum Qudsia
                  </h2>
                  <p>
                    I am an independent mobile, frontend/fullstack developer
                    with 8 years of experience in iOS, Android and Web
                    development. Skills:{" "}
                    <b>
                      Swift, ReactJS, NextJS, Firebase, Kotlin, Android, Java,
                      Javascript/Typescript, Node, Azure, HTML, CSS{" "}
                    </b>
                  </p>{" "}
                  <p>
                    I have also integrated several third-party libraries i.e.
                    payment providers such as Stripe and written native modules
                    in React Native to create bridge between Android SDK
                    (written in Java) and Javascript.
                  </p>
                </div>
              </div>
            </section>{" "}
            {/* end s-intro */}
            <>
              <section id="contact" className="s-contact target-section">
                <div className="row section-header section-header--dark">
                  <div className="column lg-12">
                    <h3 className="text-pretitle">Get In Touch</h3>
                    <h1 className="text-display-title">
                      Are you in need of a developer? Let’s work together.
                    </h1>
                  </div>
                </div>
                <div className="row row-x-center text-center s-contact__content">
                  <div className="column lg-12">
                    <p className="lead"></p>
                    <div className="btn-wrap">
                      <a
                        href={`mailto:${EMAIL}`}
                        // href="mailto:hello@anum.io"
                        className="btn btn--primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          style={{
                            fill: "rgba(0, 0, 0, 1)",
                            transform: "",
                            msFilter: "",
                          }}
                        >
                          <path d="M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M20,6v0.511 l-8,6.223L4,6.512V6H20z M4,18V9.044l7.386,5.745C11.566,14.93,11.783,15,12,15s0.434-0.07,0.614-0.211L20,9.044L20.002,18H4z" />
                        </svg>
                        Write An Email
                      </a>
                    </div>
                  </div>
                </div>
                <footer className="s-footer">
                  <div className="row s-footer__top">
                    <div className="column lg-3 md-4 stack-on-700 s-footer__block contact-social">
                      <h4 className="h6">Follow Me</h4>
                      <ul className="contact-list">
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <TwitterLink />
                          <LinkedInLink />
                          <GithubLink />
                        </div>
                        <li>
                          <a href={LINKEDLN_URL}>LinkedIn</a>
                        </li>
                        <li>
                          <a href={TWITTER_URL}>Twitter</a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/anumtravel/">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href={GITHUB_URL}>Github</a>
                        </li>
                      </ul>
                    </div>
                    <div className="column lg-3 md-12 s-footer__block contact-number">
                      <h4 className="h6">Contact Me</h4>
                      <ul className="contact-list">
                        <li>
                          <a href={`mailto:${EMAIL}`}>hello@anum.io</a>
                        </li>
                        <li>
                          <a href="tel:+4793286096">+47 932 86 096</a>
                        </li>
                      </ul>
                    </div>
                    <div className="column lg-3 md-12 s-footer__block contact-number">
                      <h4 className="h6">Company</h4>
                      <ul className="contact-list">
                        <li>FIRETECH AS</li>
                        <li>VAT: 917 876 770</li>
                      </ul>
                    </div>
                  </div>{" "}
                  {/* end s-footer__top */}
                  <div className="row s-footer__bottom">
                    <div className="column ss-copyright">
                      <span>© Copyright Anum Codes 2022</span>
                      <span>
                        Design by{" "}
                        <a href="https://www.styleshout.com/">StyleShout</a>
                      </span>
                    </div>
                    <div className="ss-go-top">
                      <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#top"
                      >
                        <span className="ss-go-top__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{
                              fill: "rgba(0, 0, 0, 1)",
                              transform: "rotate(90deg)",
                              msFilter:
                                "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)",
                            }}
                          >
                            <path d="M6 4H18V6H6zM11 14L11 20 13 20 13 14 18 14 12 8 6 14z" />
                          </svg>
                        </span>
                        <span className="ss-go-top__text">Back to Top</span>
                      </a>
                    </div>
                  </div>{" "}
                  {/* end s-footer__top */}
                </footer>
              </section>{" "}
              {/* end s-contact */}
            </>
          </>
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
            <Image src="/anumio.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
