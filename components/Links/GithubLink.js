import { GITHUB_URL } from "components/constants";
import GithubLogo from "components/SVGs/GithubLogo";
import React from "react";

export default function GithubLink() {
  return (
    <>
      <li>
        <a href={GITHUB_URL}>
          <GithubLogo width="32" height="32" viewBox="0 0 18 18" />
          <span className="screen_reader_text">Github</span>
        </a>
      </li>
    </>
  );
}
