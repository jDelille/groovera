import { useState } from "react";
import Fretboard from "../fretboard/Fretboard";

const PrintLayout: React.FC<{ fretboards: number[]; shapes: string[] }> = ({
  fretboards,
  shapes,
}) => {
  const [activeFretboard, setActiveFretboard] = useState<number>(0); // Tracks active fretboard

  return (
    <div className="print-layout">
      <header className="print-header">
        <h1>Fretboard Printout</h1>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </header>
      <div className="fretboards">
        {fretboards.map((_, index) => (
          <div key={index} className="fretboard-section">
            <h2>
              Fretboard {index + 1}: {shapes[index]}
            </h2>
            <Fretboard
              selectedShape={shapes[index]}
              active={true}
              setActiveFretboard={setActiveFretboard}
            />
          </div>
        ))}
      </div>
      <footer className="print-footer">
        <p>Printed from Guitar App</p>
      </footer>
    </div>
  );
};
