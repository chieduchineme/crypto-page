import React from "react";

const LeftArrowIcon = ({ size = 24, color = "black" }) => {
  const iconStyle = {
    pointerEvents: "none", // Disable pointer events on the icon
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      style={iconStyle}
    >
      <path d="M9.41 8L14 12.59 12.59 14 6.59 8 12.59 2 14 3.41z" /> {/* Reversed path data */}
    </svg>
  );
};

export default LeftArrowIcon;
