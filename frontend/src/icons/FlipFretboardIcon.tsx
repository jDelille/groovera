import React from "react";

type FlipFretboardIconProps = {
  size: number;
  color: string;
};

const FlipFretboardIcon: React.FC<FlipFretboardIconProps> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8L1.29289 7.29289L0.585786 8L1.29289 8.70711L2 8ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7V9ZM5.29289 3.29289L1.29289 7.29289L2.70711 8.70711L6.70711 4.70711L5.29289 3.29289ZM1.29289 8.70711L5.29289 12.7071L6.70711 11.2929L2.70711 7.29289L1.29289 8.70711ZM2 9H12V7H2V9Z"
        fill={color}
      />
      <path
        d="M22 16L22.7071 15.2929L23.4142 16L22.7071 16.7071L22 16ZM3 17C2.44772 17 2 16.5523 2 16C2 15.4477 2.44772 15 3 15L3 17ZM18.7071 11.2929L22.7071 15.2929L21.2929 16.7071L17.2929 12.7071L18.7071 11.2929ZM22.7071 16.7071L18.7071 20.7071L17.2929 19.2929L21.2929 15.2929L22.7071 16.7071ZM22 17L3 17L3 15L22 15L22 17Z"
        fill={color}
      />
    </svg>
  );
};

export default FlipFretboardIcon;
