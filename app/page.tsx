import type { Metadata } from "next";

interface HomeProps {}

export const metadata: Metadata = {};

export default function Home({}: HomeProps) {
  return (
    <>
      <h1>Hey</h1>
    </>
  );
}
