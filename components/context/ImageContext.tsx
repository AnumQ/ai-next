import React, { createContext, useContext, ReactNode } from "react";
import { useImageLoader } from "../hooks/useImageLoader";
import { isTablet, isMobile } from "../utils/utils";
import { ResponsiveImageData } from "../interfaces/ResponsiveImageData";

interface ImageContextValue {
  logoTabletSrc: string;
  logoDesktopSrc: string;
  bannerMobileSrc: string;
  bannerDesktopSrc: string;
}

const CustomContext = createContext<ImageContextValue | undefined>(undefined);

export const useImages = (): ImageContextValue => {
  const context = useContext(CustomContext);
  if (context === undefined) {
    throw new Error("useImages must be used within an ImageProvider");
  }
  return context;
};

interface ImageProviderProps {
  children: ReactNode;
  logo: ResponsiveImageData;
  banner: ResponsiveImageData;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({
  children,
  logo,
  banner,
}) => {
  // Logo will switch between tablet and desktop
  const {
    currentMobileSrc: currentLogoTabletSrc,
    currentDesktopSrc: currentLogoDesktopSrc,
  } = useImageLoader(logo, isTablet);

  // Banner will switch between mobile and desktop
  const {
    currentMobileSrc: currentBannerMobileSrc,
    currentDesktopSrc: currentBannerDesktopSrc,
  } = useImageLoader(banner, isMobile);

  const value: ImageContextValue = {
    logoTabletSrc: currentLogoTabletSrc,
    logoDesktopSrc: currentLogoDesktopSrc,
    bannerMobileSrc: currentBannerMobileSrc,
    bannerDesktopSrc: currentBannerDesktopSrc,
  };

  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};
