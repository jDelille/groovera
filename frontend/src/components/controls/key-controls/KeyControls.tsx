import React from "react";
import './keyControls.scss';
import Type from "./Type";

type KeyControlsProps = {
  setSelectedKey: (key: string) => void;
};

const KeyControls: React.FC<KeyControlsProps> = ({ setSelectedKey }) => {
  const keys: string[] = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="controls-wrapper">
      <p>Key</p>
    <div className="key-controls">
      <Type />
      {keys.map((key) => (
        <button
          key={key} 
          onClick={() => setSelectedKey(key)}
          aria-label={`Select ${key}`}
          className={key === "A" ? 'active' : ''}
        >
          {key}
        </button>
      ))}
    </div>
    </div>

  );
};

export default KeyControls;