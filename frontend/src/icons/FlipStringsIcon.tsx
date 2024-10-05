import React from "react";

type FlipStringIconProps = {
  size: number;
  color: string;
};

const FlipStringIcon: React.FC<FlipStringIconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2L16.7071 1.29289L16 0.585787L15.2929 1.29289L16 2ZM15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12L15 12ZM20.7071 5.29289L16.7071 1.29289L15.2929 2.70711L19.2929 6.70711L20.7071 5.29289ZM15.2929 1.29289L11.2929 5.29289L12.7071 6.70711L16.7071 2.70711L15.2929 1.29289ZM15 2L15 12L17 12L17 2L15 2Z"
        fill={color}
      />
      <path
        d="M8 22L8.70711 22.7071L8 23.4142L7.29289 22.7071L8 22ZM7 3C7 2.44772 7.44771 2 8 2C8.55228 2 9 2.44772 9 3L7 3ZM12.7071 18.7071L8.70711 22.7071L7.29289 21.2929L11.2929 17.2929L12.7071 18.7071ZM7.29289 22.7071L3.29289 18.7071L4.70711 17.2929L8.70711 21.2929L7.29289 22.7071ZM7 22L7 3L9 3L9 22L7 22Z"
        fill={color}
      />
    </svg>
  );
};

export default FlipStringIcon;
