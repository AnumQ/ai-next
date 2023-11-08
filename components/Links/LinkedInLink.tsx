import { LINKEDLN_URL } from "../constants";
import LinkedInLogo from "../SVGs/LinkedInLogo";
import React from "react";
import { LinkedInSVG } from "./SocialIcons";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Link.module.css";

export default function LinkedInIconLink() {
  return (
    <>
      <li>
        <a href={LINKEDLN_URL}>
          <div className={styles.icon_container}>
            <FaLinkedin size="1.4em" />
          </div>
          {/* <LinkedInSVG /> */}
          <span className="screen_reader_text">LinkedIn</span>
        </a>
      </li>
    </>
  );
}
