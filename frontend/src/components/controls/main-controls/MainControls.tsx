import React from 'react';
import './mainControls.scss';

type MainControlsProps = {
 
 }
const MainControls: React.FC<MainControlsProps> = () => {
  return (
    <div className="main-controls">
        <div className="row">
        <div className="control">
            Standard Tuning
        </div>
        <div className="control">
            Major Scale
        </div>
        <div className="control">
            CAGED
        </div>
        </div>
        <div className="row">
        <div className="control">
            Add fretboard
        </div>
        <div className="fretboard-count">
            <p>1</p>
        </div>
        </div>

    </div>
  );
};

export default MainControls;