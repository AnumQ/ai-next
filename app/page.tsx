import type { Metadata } from "next";
import Intro from "./Intro";
import { withImageProvider } from "../components/HOCs/withImageProvider";
import { getResponsiveImageData } from "../components/helpers/imageHelper";

interface HomeProps {}

export const metadata: Metadata = {};

export default function Home({}: HomeProps) {
  const withImage = withImageProvider(() => <Intro />);

  const logoData = getResponsiveImageData("logo", "png", "png", "48rem", true);
  const bannerData = getResponsiveImageData(
    "banner",
    "webp",
    "jpg",
    "30rem",
    false
  );
  const universalImages = { logoData: logoData, bannerData: bannerData };
  return withImage(universalImages);
}
