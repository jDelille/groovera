import React from "react";
import './keyControls.scss';

type KeyControlsProps = {
  setSelectedKey: (key: string) => void;
};

const KeyControls: React.FC<KeyControlsProps> = ({ setSelectedKey }) => {
  const keys: string[] = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="controls-wrapper">
      <p>Key</p>
    <div className="key-controls">
      <div className="type">
        <p>N</p>
        <p>b</p>
        <p>#</p>
      </div>
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