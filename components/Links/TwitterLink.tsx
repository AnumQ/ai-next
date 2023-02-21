import { TWITTER_URL } from "../constants";
import TwitterLogo from "../SVGs/TwitterLogo";
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
