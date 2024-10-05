import React from 'react';

type FretNumbersProps = {
    totalFrets: number;
    startFret: number | null;
    endFret: number | null;
 }

const FretNumbers: React.FC<FretNumbersProps> = ({totalFrets, startFret, endFret}) => {
  return (
    <div className="fret-numbers">
      {Array.from({ length: totalFrets }, (_, index) => {
        const fretNumber = index + 1;

        return (
          <div className="fret-number" key={index}>
            {fretNumber - 1}
            {index === 12 ? (
              <div className="doubleDot">
                <div className="dot" />
                <div className="dot" />
              </div>
            ) : (
              <div className="dot" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FretNumbers;