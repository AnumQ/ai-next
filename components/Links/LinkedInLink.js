import { LINKEDLN_URL } from "components/constants";
import LinkedInLogo from "components/SVGs/LinkedInLogo";
import React from "react";

export default function LinkedInLink() {
  return (
    <>
      <li>
        <a href={LINKEDLN_URL}>
          <LinkedInLogo width="32" height="32" viewBox="0 0 18 18" />
          <span className="screen-reader-text">LinkedIn</span>
        </a>
      </li>
    </>
  );
}
