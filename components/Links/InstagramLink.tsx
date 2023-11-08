import { INSTAGRAM_URL } from "../constants";
import React from "react";
import { InstagramSVG } from "./SocialIcons";
import styles from "./Link.module.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function InstagramLink() {
  return (
    <>
      <li>
        <a href={INSTAGRAM_URL}>
          <div className={styles.icon_container}>
            <FaInstagram size="1.4em" />
          </div>
          {/* <InstagramSVG /> */}
          <span className="screen_reader_text">Instagram</span>
        </a>
      </li>
    </>
  );
}
