import React, { useEffect } from 'react';

const colors = ["#6D70A6", "#C1C7D9", "#37648C"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomWidth() {
  // Randomize width between 20% to 40%
  return `${20 + Math.random() * 30}vw`;
}

function getRandomPosition(index) {
  const gridSize = 2;
  const cellSize = 150 / gridSize;
  const row = Math.floor(index / gridSize);
  const column = index % gridSize;
  return {
    left: `${cellSize * column}vw`,
    top: `${cellSize * row}vh`
  };
}

function AnimatedBackground() {
  useEffect(() => {
    const wedges = document.querySelectorAll('.wedge');
    wedges.forEach(wedge => {
      setTimeout(() => {
        wedge.style.opacity = '1';
      }, 300); // Delay of 300ms
    });
  }, []);
  
  const shuffledColors = shuffleArray([...colors]);

  return (
    <div>
      {Array(3).fill().map((_, index) => {
        return (
          <div 
            key={index} 
            className="wedge" 
            style={{ 
              ...getRandomPosition(index),
              width: getRandomWidth(),
              boxShadow: `rgb(250, 250, 250) 0px 0px 100px -40px inset, ${shuffledColors[index]} 0px 0px 30vw 30vw inset, ${shuffledColors[index]} 0px 0px 70px 40px`
            }} 
          />
        );
      })}
    </div>
  );
}

export default AnimatedBackground;
