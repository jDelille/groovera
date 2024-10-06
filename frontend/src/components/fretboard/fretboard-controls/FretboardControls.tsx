import React from 'react';
import { FlipFretboardIcon, PrinterIcon } from '../../../icons';
import FlipStringIcon from '../../../icons/FlipStringsIcon';
import './fretboardControls.scss';

type FretboardControlsProps = {
 
 }
const FretboardControls: React.FC<FretboardControlsProps> = () => {

  const printFretboard = () => {
    window.print();
}

  return (
    <div className="fretboard-controls">
      <div className="control">
        <FlipFretboardIcon color='white' size={18} />
      </div>
      <div className="control">
        <FlipStringIcon color='white' size={18} />
      </div>
      <div className="control" onClick={printFretboard}>
        <PrinterIcon color='white' size={18}/>
      </div>
    </div>
  );
};

export default FretboardControls;