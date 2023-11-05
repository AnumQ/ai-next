import { GITHUB_URL } from "../constants";
import GithubLogo from "../SVGs/GithubLogo";
import React from "react";
import { GithubSVG } from "./SocialIcons";

export default function GithubLink() {
  return (
    <>
      <li>
        <a href={GITHUB_URL} style={{ padding: "1px" }}>
          <GithubSVG />
          <span className="screen_reader_text">Github</span>
        </a>
      </li>
    </>
  );
}
