import React, { ReactNode } from "react";
import { ResponsiveImageData } from "../interfaces/ResponsiveImageData";
import { getImageMimeType } from "../utils/utils";

interface SourceSetProps {
  media?: string;
  src: string;
  fallback?: string;
}

const SourceSet = ({ media, src, fallback }: SourceSetProps) => {
  const mediaProps = media ? { media } : {};
  return (
    <>
      <source {...mediaProps} srcSet={src} type={getImageMimeType(src)} />
      {fallback && (
        <source
          {...mediaProps}
          srcSet={fallback}
          type={getImageMimeType(fallback)}
        />
      )}
    </>
  );
};

interface ResponsiveImageProps {
  image: ResponsiveImageData;
  mobileSrc: string;
  desktopSrc: string;
  alt?: string;
  className?: string;
}

export const ImageContainerView = ({ children }: { children: ReactNode }) => (
  <div className="image-container">{children}</div>
);

export const ResponsiveImage = ({
  image,
  mobileSrc,
  desktopSrc,
  alt,
  className,
}: ResponsiveImageProps) => {
  return (
    <ImageContainerView>
      <picture>
        {/* Mobile */}
        <SourceSet
          media={image.mobile.media}
          src={mobileSrc}
          fallback={image.mobile.fallback}
        />
        {/* Tablet and Desktop */}
        <SourceSet
          media={image.desktop.media}
          src={desktopSrc}
          fallback={image.desktop.fallback}
        />
        {/* Fallback */}
        <img src={image.mobile.fallback} alt={alt} className={className} />
      </picture>
    </ImageContainerView>
  );
};
