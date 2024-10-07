import React from 'react';
import './currentDetails.scss';

type CurrentDetailsProps = {
 
 }
const CurrentDetails: React.FC<CurrentDetailsProps> = () => {
  return (
    <div className="current-details">
        <p>A Major Scale</p>
        <p className='desc'>The A major chord has the notes A, E, and C#. The major 3rd of the chord is E and the perfect 5th is C#.</p>
    </div>
  );
};

export default CurrentDetails;