// src/AnimatedBackground.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedCircle = ({ x, y }) => {
  const animationProps = useSpring({
    from: { opacity: 1, scale: 0 },
    to: { opacity: 0, scale: 1 },
    config: {
      tension: 200,
      friction: 5,
      duration: 3000,
    },
    onRest: () => {},
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width: '50px',
        height: '50px',
        backgroundColor: 'lightblue',
        borderRadius: '50%',
        transform: animationProps.scale.interpolate(scale => `scale(${scale})`),
        opacity: animationProps.opacity,
      }}
    />
  );
};

const AnimatedBackground = () => {
  const [circles, setCircles] = useState([]);

  const addCircle = (x, y) => {
    setCircles([...circles, { x, y }]);
    setTimeout(() => {
      setCircles(c => c.slice(1)); // Remove the circle after some time
    }, 3000);
  };

  return (
    <div
      style={{ position: 'relative', width: '100vw', height: '100vh' }}
      onClick={(e) => addCircle(e.clientX, e.clientY)}
    >
      {circles.map((circle, index) => (
        <AnimatedCircle key={index} x={circle.x} y={circle.y} />
      ))}
    </div>
  );
};

export default AnimatedBackground;
