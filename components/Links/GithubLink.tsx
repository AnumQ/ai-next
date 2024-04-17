import { GITHUB_URL } from "../constants";
import React from "react";
import { FaGithub } from "react-icons/fa";
import SocialIconLink from "./SocialIconLink";

export default function GithubIconLink() {
  return (
    <>
      <SocialIconLink
        href={GITHUB_URL}
        icon={<FaGithub size="1.4em" />}
        alt={"Github"}
      />
    </>
  );
}
