import React from "react";
import CagedControls from "./caged-controls/CagedControls";
import "./controls.scss";

type ControlsProps = {
  setSelectedShape: (shape: string) => void;
  addFretboard: () => void;
  fretboards: number;
  activeFretboard: number;
  setActiveFretboard: (index: number) => void;
  removeFretboard: () => void;
};
const Controls: React.FC<ControlsProps> = ({
  setSelectedShape,
  addFretboard,
  fretboards,
  activeFretboard,
  setActiveFretboard,
  removeFretboard
}) => {
  return (
    <div className="controls">
      <CagedControls setSelectedShape={setSelectedShape} />
      <button onClick={addFretboard}>Add fretboard</button>
      <button onClick={removeFretboard}>Remove fretboard</button>
      <div className="fretboard-buttons">
        {Array.from({ length: fretboards }, (_, index) => (
          <button
            key={index}
            onClick={() => setActiveFretboard(index)}
            className={index === activeFretboard ? "active" : ""}
          >
            Fretboard {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Controls;
