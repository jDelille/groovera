import React from "react";
import './keyControls.scss';

type KeyControlsProps = {
  setSelectedKey: (key: string) => void;
};

const KeyControls: React.FC<KeyControlsProps> = ({ setSelectedKey }) => {
  const keys: string[] = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="key-controls">
      {keys.map((key) => (
        <button
          key={key} 
          onClick={() => setSelectedKey(key)}
          aria-label={`Select ${key}`}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default KeyControls;