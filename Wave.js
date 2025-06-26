import React from 'react';

const Wave = ({ amplitude, frequency, offset, color, points }) => {
  const width = 800;
  const height = 200;
  
  const generateWavePath = () => {
    let path = `M 0 ${height / 2} `;
    
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const y = (height / 2) + amplitude * Math.sin(frequency * x + offset);
      path += `L ${x} ${y} `;
    }
    
    path += `L ${width} ${height} L 0 ${height} Z`;
    return path;
  };

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path 
        d={generateWavePath()} 
        fill={color}
        stroke="none"
      />
    </svg>
  );
};

export default Wave;