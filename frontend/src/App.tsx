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
      const newFretboardId = prevFretboards.length; // Use a simple increment for new ID
      setShapes((prevShapes) => ({
        ...prevShapes,
        [newFretboardId]: "A Shape", // Initialize with a default shape
      }));
      setKeys((prevKeys) => ({
        ...prevKeys,
        [newFretboardId]: "A", // Initialize with a default key
      }));
      return [...prevFretboards, newFretboardId];
    });
  };

  const removeFretboard = () => {
    setFretboards((prevFretboards) => {
      if (prevFretboards.length > 1) {
        const newFretboards = prevFretboards.slice(0, -1);
        
        // Remove the shape for the last fretboard
        setShapes((prevShapes) => {
          const newShapes = { ...prevShapes };
          delete newShapes[prevFretboards.length - 1];
          return newShapes;
        });
  
        // Remove the key for the last fretboard
        setKeys((prevKeys) => {
          const newKeys = { ...prevKeys };
          delete newKeys[prevFretboards.length - 1];
          return newKeys;
        });
  
        return newFretboards;
      }
      return prevFretboards;
    });
  };

  // Update the selected shape for the active fretboard
  const setSelectedShape = (fretboardId: number, shape: string) => {
    setShapes((prevShapes) => ({
      ...prevShapes,
      [fretboardId]: shape, // Update the shape for the specific fretboard
    }));
  };

  const setSelectedKey = (fretboardId: number, key: string) => {
    setKeys((prevKeys) => ({
      ...prevKeys,
      [fretboardId]: key, // Update the key for the specific fretboard
    }));
  };

  return (
    <div className="app">
      <Navbar />
      <Controls
        setSelectedKey={(key: string) => setSelectedKey(activeFretboard, key)}
        setSelectedShape={(shape: string) =>
          setSelectedShape(activeFretboard, shape)
        }
        addFretboard={addFretboard}
        removeFretboard={removeFretboard}
        fretboards={fretboards.length}
        activeFretboard={activeFretboard}
        setActiveFretboard={setActiveFretboard}
      />
      <div className="fretboards">
        {fretboards.map((fretboardId, index) => (
          <Fretboard
            key={fretboardId}
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
