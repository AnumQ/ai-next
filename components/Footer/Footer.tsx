import React from "react";
import styles from "./../../styles/Home.module.css";
import Image from "next/legacy/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        <span className={styles.logo}>
          <Image src="/anumio.svg" alt="anum Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
