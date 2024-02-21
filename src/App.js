import React, { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import AnimatedBackground from './AnimatedBackground';
import LinkedInLogo from './linkedin.png';
import brian from './brian.png';
import nypirg from './nypirg.png';
import gimlet from './gimlet.png';
import wbmb from './wbmb.png';

function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/fetchRss');
      const data = await res.json();
      setItems(data.items.slice(0, 30));
    };
    fetchData();
  }, []);

  const domTarget = useRef(null);


  return (
    <div className="App" >
       <div className="carousel-container" ref={domTarget}>
      <div className="carousel">
        <div >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="feed-item">
                <h2 className="feed-title">{item.title}</h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="feed-link">
                  Read
                </a>
                <p dangerouslySetInnerHTML={{ __html: item.description }} className="feed-description" />
                <audio controls src={item.enclosure.url} className="feed-audio">
                  Your browser does not support the audio element.
                </audio>
                <img src={item.media$thumbnail?.$?.url} alt={item.title} className="feed-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className='App-content'>
        <Analytics />
        <AnimatedBackground/>
        <div className='title'>
          <div className='contact'>
            <a href="https://linkedin.com/in/esperanzarosenbaum/" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag('event', 'Linkedin', { 'event_category': 'link', 'event_label': 'LinkedIn Click' })}>
              <div className="logo-container">
                <img src={LinkedInLogo} alt="LinkedIn" className="linkedin-logo" />
              </div>
            </a>
            <a href="mailto:esperanza.rosenbaum@gmail.com" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag('event', 'Email', { 'event_category': 'link', 'event_label': 'Email Click' })}>
              <div className="logo-container">
              <svg fill="#AB595C" version="1.1" id="Capa_1" viewBox="0 0 216 216" className="email-logo">
                  <path d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498
            L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616
            l49.374-39.276V156z"/>
                </svg>              </div>
            </a>
          </div>
          <div className='intro'>
            <h2>👋🏽 I'm Esperanza Rosenbaum, a radio producer and storyteller from New York.</h2>
          </div>
          <div className='zontent'>
            <div className='content two'>
              <h3>MY WORK</h3>
              <div className='exp'>
                <img src={brian} alt="equinox" className="logo" onClick={() => { window.gtag('event', 'Equinox', { 'event_category': 'logo', 'event_label': 'Eqx Logo Click' }); }} />
                
                <img src={gimlet} alt="un" className="logo" onClick={() => { window.gtag('event', 'UN', { 'event_category': 'logo', 'event_label': 'UN Logo Click' }); }} />

                <img src={wbmb} alt="maxell" className="logo" onClick={() => { window.gtag('event', 'Maxell', { 'event_category': 'logo', 'event_label': 'Maxell Logo Click' }); }} />

                <img src={nypirg} alt="maxell" className="logo" onClick={() => { window.gtag('event', 'Maxell', { 'event_category': 'logo', 'event_label': 'Maxell Logo Click' }); }} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;