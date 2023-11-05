import React from "react";
import { TWITTER_URL } from "../constants";

const TwitterIcon = ({ color = "white", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M22.46 6.012c-.86.382-1.78.638-2.744.758a4.836 4.836 0 0 0 2.128-2.67 9.652 9.652 0 0 1-3.06 1.17 4.83 4.83 0 0 0-3.534-1.53c-2.676 0-4.85 2.173-4.85 4.85 0 .38.042.75.125 1.105-4.034-.202-7.62-2.13-10.02-5.06-.418.714-.656 1.544-.656 2.428 0 1.674.85 3.152 2.14 4.014a4.822 4.822 0 0 1-2.2-.61v.06c0 2.342 1.666 4.29 3.878 4.74-.406.112-.834.17-1.275.17-.312 0-.615-.03-.914-.086.615 1.92 2.4 3.32 4.515 3.36a9.67 9.67 0 0 1-5.98 2.06c-.39 0-.774-.022-1.152-.067a13.65 13.65 0 0 0 7.392 2.17c8.86 0 13.7-7.34 13.7-13.7 0-.21-.004-.42-.013-.63a9.77 9.77 0 0 0 2.4-2.488z"
    />
  </svg>
);

export default function TwitterLink() {
  return (
    <>
      <li>
        <a href={TWITTER_URL} className="">
          <TwitterIcon />

          {/* <TwitterLogo width="100%" height="100%" viewBox="0 0 17 20" /> */}
          <span className="screen_reader_text">Twitter</span>
        </a>
      </li>
    </>
  );
}
