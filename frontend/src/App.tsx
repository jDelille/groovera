import React, { useState } from "react";
import Fretboard from "./components/fretboard/Fretboard";
import Navbar from "./components/navbar/Navbar";
import Controls from "./components/controls/Controls";
import "./sass/global.scss";

const App: React.FC = () => {
  const [fretboards, setFretboards] = useState<number[]>([0]); // Initial fretboard
  const [activeFretboard, setActiveFretboard] = useState<number>(0); // Tracks active fretboard
  const [shapes, setShapes] = useState<string[]>(["A Shape"]); // Shapes for each fretboard

  const addFretboard = () => {
    setFretboards((prevFretboards) => [
      ...prevFretboards,
      prevFretboards.length,
    ]);
    setShapes((prevShapes) => [...prevShapes, "A Shape"]); // Add default shape
  };

  const removeFretboard = () => {
    setFretboards((prevFretboards) => {
      if (prevFretboards.length > 1) {
        const newFretboards = prevFretboards.slice(0, -1);
        setShapes((prevShapes) => prevShapes.slice(0, -1)); // Remove shape as well
        return newFretboards; // Remove the last fretboard
      }
      return prevFretboards;
    });
  };

    // Update the selected shape for the active fretboard
    const setSelectedShape = (shape: string) => {
      setShapes((prevShapes) =>
        prevShapes.map((s, index) =>
          index === activeFretboard ? shape : s // Update only the active fretboard's shape
        )
      );
    };


  return (
    <div className="app">
      <Navbar />
      <Controls
        setSelectedShape={setSelectedShape}
        addFretboard={addFretboard}
        removeFretboard={removeFretboard}
        fretboards={fretboards.length}
        activeFretboard={activeFretboard}
        setActiveFretboard={setActiveFretboard}
      />
      <div className="fretboards">
        {fretboards.map((_, index) => (
          <Fretboard
            key={index}
            selectedShape={shapes[index]} 
            active={fretboards.length > 1 && index === activeFretboard}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
