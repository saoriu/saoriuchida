import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useSpring, animated } from '@react-spring/web';
import './App.css';
import AnimatedBackground from './AnimatedBackground';
import Projects from './Projects';
import Work from './Work';
import Contact from './Contact';

// Images
import hpeqxnew from './images/hp-eqx-new.png';
import factilanding from './images/facti-landing.png';
import earbuds from './images/earbuds.jpg';
import search from './images/search.png';

const imageUrls = [search, earbuds, factilanding, hpeqxnew];

function preloadImages() {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Initialize theme before component renders
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme);
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleComponent, setVisibleComponent] = useState('intro');
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');

  const showProjects = () => {
    setVisibleComponent('projects');
    setBackgroundOpacity(0.25);
  };

  const showWork = () => {
    setVisibleComponent('work');
    setBackgroundOpacity(0.25);
  };

  const showIntro = () => {
    setVisibleComponent('intro');
    setBackgroundOpacity(1);
  };

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const transitions = useSpring({
    opacity: visibleComponent === 'intro' ? 1 : 0,
    transform: visibleComponent === 'intro' ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 1000 },
  });

  const projectTransitions = useSpring({
    opacity: visibleComponent === 'projects' ? 1 : 0,
    config: { duration: 1000 },
  });

  const workTransitions = useSpring({
    opacity: visibleComponent === 'work' ? 1 : 0,
    config: { duration: 1000 },
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="App-main">
      <AnimatedBackground isLoading={isLoading} opacity={backgroundOpacity} />
      <div className="App">
        <div className='App-content'>
          <Analytics />
          <button className="theme-toggle-button" onClick={toggleTheme}>
            {isDarkMode ? '🌞' : '🌜'}
          </button>
          {visibleComponent === 'intro' && (
            <animated.div style={transitions} className='title'>
              <Contact isDarkMode={isDarkMode}/>
              <div className='intro'>
                <h2>I'm Saori Uchida, a technical product manager and indie game developer based in New York 👩🏻‍💻</h2>
                <div className='buttons'>
                  <button className="button project" onClick={showProjects}>See my projects</button>
                  <button className="button works" onClick={showWork}>See my work</button>
                </div>
              </div>
            </animated.div>
          )}
          {visibleComponent === 'projects' && (
            <animated.div style={projectTransitions} className='content'>
              <Projects isDarkMode={isDarkMode} />
              <button className="home" onClick={showIntro}>
                🏠
              </button>
            </animated.div>
          )}
          {visibleComponent === 'work' && (
            <animated.div style={workTransitions} className='content'>
              <Work isDarkMode={isDarkMode} />
              <button className="home" onClick={showIntro}>
                🏠
              </button>
            </animated.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;