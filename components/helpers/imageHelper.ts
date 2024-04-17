import { ResponsiveImageData } from '../interfaces/ResponsiveImageData';
interface ImagePaths {
  mobileHighRes: string;
  mobileLowRes: string;
  mobileFallback: string;
  desktopLowRes: string;
  desktopHighRes: string;
  desktopFallback: string;
}
/**
 * Constructs paths for mobile and desktop images in both high and low resolution.
 * It generates paths based on the image name, desired high-resolution extension,
 * fallback extension, and a flag indicating whether low-resolution images use a
 * universal naming convention.
 *
 * @param {string} imageName - The base name of the image without extension.
 * @param {string} highResExt - The file extension to use for high-resolution images.
 * @param {string} fallBackExt - The fallback file extension for high-resolution images if the primary extension is not available.
 * @param {boolean} isLowResUniversal - A flag to determine if low-resolution images should use a universal naming scheme (true) or be specific to mobile/desktop (false).
 * Use isLowResUniversal true when the lowRes image should be the same for desktop and mobile. An example would be logo-lowRes generated with resizeLogoFromSize600 script
 *
 * @returns {Object} An object containing paths for:
 * - mobileHighRes: Path for the mobile high-resolution image with the primary extension.
 * - mobileLowRes: Path for the mobile low-resolution image. Uses a universal name if `isLowResUniversal` is true, or appends '-mobile' to the name if false.
 * - mobileFallback: Path for the mobile high-resolution image with the fallback extension.
 * - desktopLowRes: Path for the desktop low-resolution image. Uses a universal name if `isLowResUniversal` is true, or appends '-desktop' to the name if false.
 * - desktopHighRes: Path for the desktop high-resolution image with the primary extension.
 * - desktopFallback: Path for the desktop high-resolution image with the fallback extension.
 */
export function getImagePaths(imageName: string, highResExt: string, fallBackExt: string, isLowResUniversal: boolean): ImagePaths {
  const mobileLowRes = `/images/${!isLowResUniversal ? imageName + '-mobile' : imageName}-lowRes.webp`;
  const mobileHighRes = `/images/${imageName}-mobile-highRes.${highResExt}`;
  const mobileFallback = `/images/${imageName}-mobile-highRes.${fallBackExt}`;
  const desktopLowRes = `/images/${!isLowResUniversal ? imageName + '-desktop' : imageName}-lowRes.webp`;
  const desktopHighRes = `/images/${imageName}-desktop-highRes.${highResExt}`;
  const desktopFallback = `/images/${imageName}-desktop-highRes.${fallBackExt}`;
  return {
    mobileHighRes,
    mobileLowRes,
    mobileFallback,
    desktopLowRes,
    desktopHighRes,
    desktopFallback,
  };
}

/**
 * Generates image data for responsive web design, providing paths for mobile and desktop images
 * in both high and low resolution, along with a media query breakpoint for responsive behavior.
 * This function utilizes `getImagePaths` to construct the paths based on the provided parameters.
 *
 * @param {string} imageName - The base name of the image without an extension.
 * @param {string} highResExt - The file extension for high-resolution images.
 * @param {string} fallbackExt - The fallback file extension for high-resolution images if the primary extension is not supported.
 * @param {string} breakpoint - The viewport width (in rems) at which to switch between mobile and desktop images.
 * @param {boolean} isLowResUniversal - Indicates whether low-resolution images should follow a universal naming convention (true) or be distinct between mobile and desktop versions (false).
 *
 * @returns {Object} An object containing two keys, `mobile` and `desktop`, each of which contains:
 * - media: A CSS media query string that uses `max-width` for mobile and `min-width` for desktop to determine when to apply the breakpoint.
 * - highRes: The path to the high-resolution version of the image.
 * - lowRes: The path to the low-resolution version of the image.
 * - fallback: The path to the high-resolution fallback image in case the primary high-res image type is not supported.
 *
 * This structured return value is designed to facilitate the implementation of responsive images, providing a straightforward method to define image sources for different viewport sizes and resolutions.
 */
export function getResponsiveImageData(imageName: string, highResExt: string, fallbackExt: string, breakpoint: string, isLowResUniversal: boolean): ResponsiveImageData {
  const { mobileLowRes, mobileHighRes, mobileFallback, desktopLowRes, desktopHighRes, desktopFallback } = getImagePaths(imageName, highResExt, fallbackExt, isLowResUniversal);

  const mobileMediaWidth = 'max-width';
  const desktopMediaWidth = 'min-width';
  const productBreakPoint = breakpoint; // Defines the width at which the breakpoint should trigger
  return {
    mobile: {
      media: `(${mobileMediaWidth}: ${productBreakPoint})`,
      highRes: mobileHighRes,
      lowRes: mobileLowRes,
      fallback: mobileFallback,
    },
    desktop: {
      media: `(${desktopMediaWidth}: ${productBreakPoint})`,
      highRes: desktopHighRes,
      lowRes: desktopLowRes,
      fallback: desktopFallback,
    },
  };
}
