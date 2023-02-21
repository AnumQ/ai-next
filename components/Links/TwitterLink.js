import { TWITTER_URL } from "components/constants";
import TwitterLogo from "components/SVGs/TwitterLogo";
import React from "react";
import s from "./Shared.module.css";
export default function TwitterLink() {
  return (
    <>
      <li>
        <a href={TWITTER_URL} className={s.link}>
          <TwitterLogo width="32" height="32" viewBox="0 0 18 18" />
          <span className="screen_reader_text">Twitter</span>
        </a>
      </li>
    </>
  );
}
