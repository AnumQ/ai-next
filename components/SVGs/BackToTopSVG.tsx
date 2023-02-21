import React from "react";

export default function BackToTopSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      style={{
        fill: "rgba(0, 0, 0, 1)",
        transform: "rotate(90deg)",
        msFilter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)",
      }}
    >
      <path d="M6 4H18V6H6zM11 14L11 20 13 20 13 14 18 14 12 8 6 14z" />
    </svg>
  );
}
