import React, { useState } from "react";
import Fretboard from "./components/fretboard/Fretboard";
import Navbar from "./components/navbar/Navbar";
import Controls from "./components/controls/Controls";
import "./sass/global.scss";

const App: React.FC = () => {
  const [fretboards, setFretboards] = useState<number[]>([0]); 
  const [activeFretboard, setActiveFretboard] = useState<number>(0); 
  const [shapes, setShapes] = useState<string[]>(["A Shape"]); 
  const [keys, setKeys] = useState<string[]>(["A"]);

  const addFretboard = () => {
    setFretboards((prevFretboards) => {
      const newFretboards = [...prevFretboards, prevFretboards.length];
      setShapes((prevShapes) => [...prevShapes, "A Shape"]); // Add a default shape
      return newFretboards;
    });
  };

  const removeFretboard = () => {
    setFretboards((prevFretboards) => {
      if (prevFretboards.length > 1) {
        const newFretboards = prevFretboards.slice(0, -1);
        setShapes((prevShapes) => prevShapes.slice(0, -1)); 
        return newFretboards; 
      }
      return prevFretboards;
    });
  };

    // Update the selected shape for the active fretboard
    const setSelectedShape = (shape: string) => {
      setShapes((prevShapes) =>
        prevShapes.map((s, index) =>
          index === activeFretboard ? shape : s 
        )
      );
    };

     // Update the selected key for the active fretboard
     const setSelectedKey = (key: string) => {
      setKeys((prevKeys) =>
        prevKeys.map((k, index) =>
          index === activeFretboard ? key : k
        )
      );
    };


  return (
    <div className="app">
      <Navbar />
      <Controls
      setSelectedKey={setSelectedKey}
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
            setActiveFretboard={setActiveFretboard}
            active={fretboards.length > 1 && index === activeFretboard}
            index={index}
            selectedKey={keys[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
