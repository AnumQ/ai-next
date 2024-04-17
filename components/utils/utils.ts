export function getImageMimeType(filePath: string): string {
  const extension = filePath.split(".").pop()?.toLowerCase();
  let mimeType = "";

  switch (extension) {
    case "jpg":
    case "jpeg":
      mimeType = "image/jpeg";
      break;
    case "png":
      mimeType = "image/png";
      break;
    case "gif":
      mimeType = "image/gif";
      break;
    case "webp":
      mimeType = "image/webp";
      break;
    case "svg":
      mimeType = "image/svg+xml";
      break;
    default:
      mimeType = "unknown";
  }

  return mimeType;
}

export const isTablet: () => boolean = () => window.innerWidth <= 768; // Same as 48rem
export const isMobile: () => boolean = () => window.innerWidth <= 480; // Same as 30rem
