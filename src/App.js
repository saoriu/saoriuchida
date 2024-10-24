import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { useSpring, animated } from '@react-spring/web';
import { FaHome, FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
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
  const [visibleComponent, setVisibleComponent] = useState('intro');
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');
  const navigate = useNavigate();
  const location = useLocation();

  const showProjects = () => {
    setVisibleComponent('projects');
    setBackgroundOpacity(0.25);
    navigate('/projects');
  };

  const showWork = () => {
    setVisibleComponent('work');
    setBackgroundOpacity(0.25);
    navigate('/work');
  };

  const showIntro = () => {
    setVisibleComponent('intro');
    setBackgroundOpacity(0.85);
    navigate('/');
  };

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    // Handle specific job routes and base route for /work
    const path = location.pathname;
    if (path === '/work' || path.startsWith('/work/')) {
      setVisibleComponent('work');
      setBackgroundOpacity(0.25); // Set background opacity for work
    } else if (path === '/projects' || path.startsWith('/projects/')) {
      setVisibleComponent('projects');
      setBackgroundOpacity(0.25);
    } else {
      setVisibleComponent('intro');
      setBackgroundOpacity(0.85); // Higher opacity for intro
    }
  }, [location.pathname]);

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

  let lastScrollTop = 0;

  const handleScroll = (event) => {
    const nav = document.querySelector('.nav');
    if (nav) {
      const currentScrollTop = event.target.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        nav.style.opacity = '0.2'; // Scrolling down
      } else {
        nav.style.opacity = '1'; // Scrolling up
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    }
  };

  useEffect(() => {
    const appMainElement = document.querySelector('.App');

    if (appMainElement) {
      // Attach the handleScroll function to the scroll event of the appMainElement
      appMainElement.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (appMainElement) {
        appMainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="App-main">
      <AnimatedBackground isLoading={isLoading} opacity={backgroundOpacity} />
      <div className="App">
        <div className='App-content'>
          <Analytics />
          <div className='nav'>
            <button className="theme-toggle-button" onClick={toggleTheme}>
              {isDarkMode ? <MdSunny /> : <FaMoon />}
            </button>
            {location.pathname !== '/work' && location.pathname !== '/projects' && !location.pathname.startsWith('/projects/') && !location.pathname.startsWith('/work/') && (
              <Contact isDarkMode={isDarkMode} />
            )}
            {(location.pathname === '/work' || location.pathname === '/projects' || location.pathname.startsWith('/projects/') || location.pathname.startsWith('/work/')) ? (
              <button className="home" onClick={showIntro}>
                <FaHome />
              </button>
            ) : (
              <div className="home-placeholder"></div>
            )}
          </div>
          <Routes>
            <Route path="/" element={
              <animated.div style={transitions} className='title'>
                <div className='intro'>
                  <h2>I'm Saori Uchida, a technical product manager and indie game developer based in New York 👩🏻‍💻</h2>
                  <div className='buttons'>
                    <button className="button project" onClick={showProjects}>See my projects</button>
                    <button className="button works" onClick={showWork}>See my work</button>
                  </div>
                </div>
              </animated.div>
            } />
            <Route path="/projects/*" element={
              <animated.div style={projectTransitions} className='content'>
                <Projects isDarkMode={isDarkMode} />
              </animated.div>
            } />
            <Route path="/work/*" element={
              <animated.div style={workTransitions} className='content'>
                <Work isDarkMode={isDarkMode} />
              </animated.div>
            } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;