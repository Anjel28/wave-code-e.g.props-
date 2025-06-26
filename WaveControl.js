import React from 'react';

const WaveControl = ({ 
  amplitude, 
  frequency, 
  speed, 
  color, 
  points,
  onPropChange 
}) => {
  return (
    <div className="wave-controls">
      <div className="control-group">
        <label>Amplitude: {amplitude}</label>
        <input 
          type="range" 
          min="10" 
          max="100" 
          value={amplitude}
          onChange={(e) => onPropChange('amplitude', Number(e.target.value))}
        />
      </div>
      
      <div className="control-group">
        <label>Frequency: {frequency.toFixed(3)}</label>
        <input 
          type="range" 
          min="0.001" 
          max="0.05" 
          step="0.001"
          value={frequency}
          onChange={(e) => onPropChange('frequency', Number(e.target.value))}
        />
      </div>
      
      <div className="control-group">
        <label>Speed: {speed.toFixed(2)}</label>
        <input 
          type="range" 
          min="0.01" 
          max="0.5" 
          step="0.01"
          value={speed}
          onChange={(e) => onPropChange('speed', Number(e.target.value))}
        />
      </div>
      
      <div className="control-group">
        <label>Points: {points}</label>
        <input 
          type="range" 
          min="5" 
          max="50" 
          value={points}
          onChange={(e) => onPropChange('points', Number(e.target.value))}
        />
      </div>
      
      <div className="control-group">
        <label>Color:</label>
        <input 
          type="color" 
          value={color}
          onChange={(e) => onPropChange('color', e.target.value)}
        />
      </div>
    </div>
  );
};

export default WaveControl;