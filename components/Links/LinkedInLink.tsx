import { LINKEDLN_URL } from "../constants";
import LinkedInLogo from "../SVGs/LinkedInLogo";
import React from "react";
import { LinkedInSVG } from "./SocialIcons";

export default function LinkedInLink() {
  return (
    <>
      <li>
        <a href={LINKEDLN_URL}>
          <LinkedInSVG />
          <span className="screen_reader_text">LinkedIn</span>
        </a>
      </li>
    </>
  );
}
