import React from 'react';
import './toggle.scss';

type ToggleProps = {
  shapes: string[]; // Prop to determine which shapes to display
};

const Toggle: React.FC<ToggleProps> = ({ shapes }) => {
  return (
    <div className="toggle-group"> {/* Use a wrapper for styling */}
      {shapes.map((shape) => (
        <div className="toggle" key={shape}>
          <input type="radio" id={shape} name="shape" className='radio' />
          <label htmlFor={shape}>{shape}</label>
        </div>
      ))}
    </div>
  );
};

export default Toggle;