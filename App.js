import React, { useState } from 'react';
//import WaveContainer from './WaveContainer';
//import WaveControl from './WaveControl.';
import WaveContainer from './components/WaveContainer.js';
import WaveControl from './components/WaveControl.js';
import './App.css';

function App() {
  const [waveProps, setWaveProps] = useState({
    amplitude: 30,
    frequency: 0.02,
    speed: 0.1,
    color: '#4a6bff',
    points: 20
  });

  const handlePropChange = (propName, value) => {
    setWaveProps(prev => ({
      ...prev,
      [propName]: value
    }));
  };

  return (
    <div className="App">
      <h1>React Wave Animation with Props</h1>
      <WaveContainer {...waveProps} />
      <WaveControl 
        {...waveProps}
        onPropChange={handlePropChange}
      />
    </div>
  );
}

export default App;