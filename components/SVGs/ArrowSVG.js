import React from "react";

export default function ArrowSVG() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        style={{
          fill: "rgba(0, 0, 0, 1)",
          transform: "rotate(180deg)",
          msFilter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)",
        }}
      >
        <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z" />
      </svg>
    </>
  );
}
