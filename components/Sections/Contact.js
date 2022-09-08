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

export const Contact = () => {
  return (
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
                <a href="https://www.instagram.com/anumtravel/">Instagram</a>
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
              Design by <a href="https://www.styleshout.com/">StyleShout</a>
            </span>
          </div>
          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
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
    </section>
  );
};
