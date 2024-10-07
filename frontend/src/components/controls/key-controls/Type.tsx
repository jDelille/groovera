import React from "react";
import "./type.scss";

type TypeProps = {};
const Type: React.FC<TypeProps> = () => {
  return (
    <div className="type">
      <div className="option">
        <div className="circle active"></div>
        <p>N</p>
      </div>

      <div className="option">
        <div className="circle"></div>
        <p>#</p>
      </div>

      <div className="option">
        <div className="circle"></div>
        <p>b</p>
      </div>
    </div>
  );
};

export default Type;
