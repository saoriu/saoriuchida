import React, { useEffect, useState } from 'react';

const colors = ["#6D70A6", "#ebb66a", "#37648C"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomWidth() {
  const screenWidth = window.innerWidth;
  let width;

  if (screenWidth < 600) {
    width = `${30 + Math.random() * 20}vw`;
  } else if (screenWidth < 1200) {
    width = `${20 + Math.random() * 20}vw`;
  } else {
    width = `${20 + Math.random() * 15}vw`;
  }

  return width;
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

function AnimatedBackground({ isLoading, opacity }) {
  // useState with an initializer function
  const [wedges] = useState(() => {
    // This code will only run once when the component is mounted
    const shuffledColors = shuffleArray([...colors]);
    return Array(3).fill().map((_, index) => ({
      color: shuffledColors[index],
      position: getRandomPosition(index),
      width: getRandomWidth(),
    }));
  });

  useEffect(() => {
    // Opacity effect when the component mounts
    const wedgesElements = document.querySelectorAll('.wedge');
    setTimeout(() => {
      wedgesElements.forEach(wedge => {
        wedge.style.opacity = '0.85';
      });
    }, 0); // Delay of 0ms
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <div>
    {wedges.map((wedge, index) => (
      <div 
        key={index} 
        className={`wedge ${isLoading ? 'pulse' : ''}`} // Add the 'pulse' class when isLoading is true
        style={{ 
          ...wedge.position,
          width: wedge.width,
          opacity: opacity, // Use the passed opacity prop
          transition: 'opacity 1s ease-in-out', // Add transition effect
          boxShadow: `rgb(250, 250, 250) 0px 0px 100px -40px inset, ${wedge.color} 0px 0px 30vw 30vw inset, ${wedge.color} 0px 0px 70px 40px`
        }} 
      />
    ))}
  </div>
  );
}

export default AnimatedBackground;