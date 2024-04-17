import React from "react";
import { ImageProvider } from "../context/ImageContext";
import { ResponsiveImageData } from "../interfaces/ResponsiveImageData";

interface WithImageProviderProps {
  logoData: ResponsiveImageData;
  bannerData: ResponsiveImageData;
}

export function withImageProvider<T>(WrappedComponent: React.ComponentType<T>) {
  return function WithImage(props: T & WithImageProviderProps) {
    const { logoData, bannerData } = props;
    return (
      <ImageProvider logo={logoData} banner={bannerData}>
        <WrappedComponent {...props} />
      </ImageProvider>
    );
  };
}
