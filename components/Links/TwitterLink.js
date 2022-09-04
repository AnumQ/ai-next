import { TwitterLogo } from "components/SVGs/TwitterLogo";
import React from "react";

export const TwitterLink = () => {
  return (
    <>
      <li>
        <a href="https://twitter.com/anumqudsia">
          <TwitterLogo width="18" height="18" viewBox="0 0 18 18" />
          <span className="screen-reader-text">Twitter</span>
        </a>
      </li>
    </>
  );
};
