import { LINKEDLN_URL } from "../constants";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import SocialIconLink from "./SocialIconLink";

export default function LinkedInIconLink() {
  return (
    <>
      <SocialIconLink
        href={LINKEDLN_URL}
        icon={<FaLinkedin size="1.4em" />}
        alt={"LinkedIn"}
      />
    </>
  );
}
