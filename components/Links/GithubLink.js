import { GithubLogo } from "components/SVGs/GithubLogo";
import React from "react";

export const GithubLink = () => {
  return (
    <>
      <li>
        <a href="https://github.com/AnumQ/">
          <GithubLogo width="18" height="18" viewBox="0 0 18 18" />
          <span className="screen-reader-text">Github</span>
        </a>
      </li>
    </>
  );
};
