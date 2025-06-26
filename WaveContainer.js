import React, { useState, useEffect } from 'react';
import Wave from './Wave';

const WaveContainer = ({ amplitude, frequency, speed, color, points }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, );

  const animate = () => {
    setOffset(prevOffset => prevOffset + speed);
    requestAnimationFrame(animate);
  };

  return (
    <div className="wave-container">
      <Wave 
        amplitude={amplitude}
        frequency={frequency}
        offset={offset}
        color={color}
        points={points}
      />
    </div>
  );
};

export default WaveContainer;