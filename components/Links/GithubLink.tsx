import { GITHUB_URL } from "../constants";
import GithubLogo from "../SVGs/GithubLogo";
import React from "react";
import { GithubSVG } from "./SocialIcons";
import { FaGithub } from "react-icons/fa";
import styles from "./Link.module.css";
export default function GithubIconLink() {
  return (
    <>
      <li>
        <a href={GITHUB_URL}>
          <div className={styles.icon_container}>
            <FaGithub size="1.4em" />
          </div>
          {/* <GithubSVG /> */}
          <span className="screen_reader_text">Github</span>
        </a>
      </li>
    </>
  );
}
