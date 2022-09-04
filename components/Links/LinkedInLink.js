import { LinkedInLogo } from "components/SVGs/LinkedInLogo";
import React from "react";

export const LinkedInLink = () => {
  return (
    <>
      <li>
        <a href="https://www.linkedin.com/in/anum-qudsia-75199262/">
          <LinkedInLogo width="18" height="18" viewBox="0 0 18 18" />
          <span className="screen-reader-text">LinkedIn</span>
        </a>
      </li>
    </>
  );
};
