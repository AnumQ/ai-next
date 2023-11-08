import React from "react";
import {
  EMAIL,
  CONTACT_PRE_TITLE,
  CONTACT_TITLE,
  EMAIL_TITLE,
} from "../constants";
import TwitterLink from "../Links/TwitterLink";
import BackToTopSVG from "../SVGs/BackToTopSVG";
import { Footer } from "./Footer";

export default function Contact() {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="row section-header section-header--dark">
        <div className="column lg-12">
          <h3 className="text-pretitle">{CONTACT_PRE_TITLE}</h3>
          <h1 className="text-display-title">{CONTACT_TITLE}</h1>
        </div>
      </div>
      <div className="row row_x_center text-center s-contact__content">
        <div className="column lg-12">
          <p className="lead"></p>
          <div className="btn-wrap">
            <a href={`mailto:${EMAIL}`} className="btn btn--primary">
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
              {EMAIL_TITLE}
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
