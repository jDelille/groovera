import React from "react";
import "./cagedControls.scss";

type CagedControlsProps = {
  setSelectedShape: (shape: string) => void;
};

const CagedControls: React.FC<CagedControlsProps> = ({ setSelectedShape }) => {
  const shapes: string[] = ["C Shape", "A Shape", "G Shape", "E Shape", "D Shape"];

  return (
    <div className="caged-controls">
      {shapes.map((shape) => (
        <button
          key={shape} // Ensure each button has a unique key
          onClick={() => setSelectedShape(shape)}
          aria-label={`Select ${shape}`} // Improve accessibility
        >
          {shape}
        </button>
      ))}
    </div>
  );
};

export default CagedControls;