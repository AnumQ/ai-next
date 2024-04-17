import { useState, useEffect } from 'react';
import { ResponsiveImageData } from '../interfaces/ResponsiveImageData';

type CurrentImages = {
  currentMobileSrc: string;
  currentDesktopSrc: string;
};

export const useImageLoader = (imageObject: ResponsiveImageData, isWindowResponsive: () => boolean, checkIsMounted = false): CurrentImages => {
  const [currentMobileSrc, setCurrentMobileSrc] = useState<string>(imageObject.mobile.lowRes);
  const [currentDesktopSrc, setCurrentDesktopSrc] = useState<string>(imageObject.desktop.lowRes);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const loadImage = async (src: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = (error) => reject(new Error(`Failed to load image: ${src}`));
      });
    };

    const loadImageWithCallBack = async (url: string, setCallBack: React.Dispatch<React.SetStateAction<string>>) => {
      try {
        const src = await loadImage(url);

        if (checkIsMounted) {
          if (isMounted) setCallBack(src); // Check if component is still mounted
        } else {
          setCallBack(src);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const loadDesktop = async () => {
      loadImageWithCallBack(imageObject.desktop.highRes, setCurrentDesktopSrc);
    };

    const loadMobile = async () => {
      await loadImageWithCallBack(imageObject.mobile.highRes, setCurrentMobileSrc);
    };

    // Check if High Res is not already loaded for Mobile
    if (currentMobileSrc !== imageObject.mobile.highRes && isWindowResponsive()) {
      loadMobile();
      // Delayed for performance
      // setTimeout(loadDesktop, 5000);
    }

    // Check if High Res is not already loaded for Desktop
    if (currentDesktopSrc !== imageObject.desktop.highRes && !isWindowResponsive()) {
      loadDesktop();
      // Delayed for performance
      // setTimeout(loadMobile, 3000);
    }

    return () => {
      isMounted = false;
    };
  }, [currentMobileSrc, currentDesktopSrc, isWindowResponsive, checkIsMounted, imageObject.desktop.highRes, imageObject.mobile.highRes]);

  return { currentMobileSrc, currentDesktopSrc };
};
