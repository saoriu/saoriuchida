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

function getRandomWidth() {
  // Randomize width between 50% to 100%
  return `${50 + Math.random() * 50}vw`;
}

function AnimatedBackground() {
  return (
    <div>
      {colors.map((_, index) => {
        const randomColor = getRandomColor();
        return (
          <div 
            key={index} 
            className="wedge" 
            style={{ 
              ...getRandomPosition(),
              width: getRandomWidth(),
              boxShadow: `rgb(250, 250, 250) 0px 0px 100px -40px inset, ${randomColor} 0px 0px 30vw 30vw inset, ${randomColor} 0px 0px 70px 40px`
            }} 
          />
        );
      })}
    </div>
  );
}

export default AnimatedBackground;
