import React from "react";
import {
  LINKEDLN_URL,
  TWITTER_URL,
  GITHUB_URL,
  EMAIL,
  MOBILE,
  COPYRIGHT,
  COMPANY_VALUE,
  VAT,
  COMPANY_TITLE,
  INSTAGRAM_URL,
} from "../constants";
import GithubIconLink from "../Links/GithubLink";
import LinkedInIconLink from "../Links/LinkedInIcon";
import styles from "./Footer.module.css";
import { InstagramSVG } from "../Links/SocialIcons";
import InstagramLink from "../Links/InstagramLink";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="s-footer">
      <div className="row s-footer__top">
        <div className="column lg-3 md-4 stack-on-700 s-footer__block contact-social">
          <h4 className="h6">Follow Me</h4>
          <ul className="contact-list">
            <div className={styles.social_icons_container}>
              <div className={styles.social_icon_container}>
                <div className={styles.icon_container}>
                  <LinkedInIconLink />
                </div>
                <a href={LINKEDLN_URL}>Linkedln</a>
              </div>
              <div>
                <div className={styles.social_icon_container}>
                  <div className={styles.icon_container}>
                    <GithubIconLink />
                  </div>
                  <a href={GITHUB_URL}>Github</a>
                </div>
              </div>
              <div className={styles.social_icon_container}>
                <div className={styles.icon_container}>
                  <InstagramLink />
                </div>
                <a href={INSTAGRAM_URL}>Instagram</a>
              </div>
            </div>
          </ul>
        </div>
        <div className="column lg-3 md-12 s-footer__block contact-number">
          <h4 className="h6">Contact Me</h4>
          <ul className="contact-list">
            <li>
              <a
                style={{ textDecoration: "underline" }}
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${MOBILE}`}>{MOBILE}</a>
            </li>
          </ul>
        </div>
        <div className="column lg-3 md-12 s-footer__block contact-number">
          <h4 className="h6">{COMPANY_TITLE}</h4>
          <ul className="contact-list">
            <li>{COMPANY_VALUE}</li>
            <li>{VAT}</li>
          </ul>
        </div>
      </div>{" "}
      {/* end s-footer__top */}
      <div className="row s-footer__bottom center">
        <div className="column ss-copyright center_child">
          <span>
            {COPYRIGHT} {year}
          </span>
        </div>
        {/* <div className="ss-go-top">
           <a className="smoothscroll" title="Back to Top" href="#top">
             <span className="ss-go-top__icon">
               <BackToTopSVG />
             </span>
             <span className="ss-go-top__text">Back to Top</span>
           </a>
          </div> */}
      </div>{" "}
      {/* end s-footer__top */}
    </footer>
  );
}
