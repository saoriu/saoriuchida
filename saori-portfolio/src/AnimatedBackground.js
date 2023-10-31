import React from 'react';

const colors = ["#d4acff", "#7ab8ff", "#ffffff"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomPosition() {
    return {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`
    };
  }
  
  function AnimatedBackground() {
    return (
      <div>
        {colors.map((_, index) => (
          <div 
            key={index} 
            className="wedge" 
            style={{ 
              ...getRandomPosition(),
              backgroundColor: getRandomColor(), 
              width: '100px', 
              height: '100px' 
            }} 
          />
        ))}
      </div>
    );
  }
  

export default AnimatedBackground;
