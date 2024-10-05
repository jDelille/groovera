import React, { useState } from 'react';
import Fretboard from './components/fretboard/Fretboard';
import CagedControls from './components/caged-controls/CagedControls';
import Navbar from './components/navbar/Navbar';
import './sass/global.scss';

const App: React.FC = () => {

  const [selectedShape, setSelectedShape] = useState<string>("A Shape");

  return (
    <div className="app">
      <Navbar />
      <CagedControls setSelectedShape={setSelectedShape} />
      <Fretboard selectedShape={selectedShape} />
    </div>
  );
};

export default App;
