// interface ImageComponentUniversalProps {
//   srcPath: string;
//   fallbackPath: string;
//   alt: string;
// }
// export const ImageComponentUniversal = ({ srcPath, fallbackPath, alt }: ImageComponentUniversalProps) => {
//   return (
//     <div className={'image-container'}>
//       <picture>
//         <SourceSet src={srcPath} fallback={fallbackPath} />
//         {/* Fallback */}
//         <img src={fallbackPath} alt={alt} className={'image'} />
//       </picture>
//     </div>
//   );
// };

export interface ResponsiveImageData {
  mobile: ImageMediaData;
  desktop: ImageMediaData;
}
interface ImageMediaData {
  media: string;
  highRes: string;
  lowRes: string;
  fallback: string;
}
