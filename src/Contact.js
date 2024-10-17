import React, { useState, useEffect, useRef } from 'react';
import LinkedInLogo from './images/linkedin.png';

function Contact({ isDarkMode }) {
  return (

    <div className='contact'>
      <a href="https://linkedin.com/in/saoriuchida/" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag('event', 'Linkedin', { 'event_category': 'link', 'event_label': 'LinkedIn Click' })}>
        <div className="logo-container">
          <img src={LinkedInLogo} alt="LinkedIn" className={`linkedin-logo ${isDarkMode ? 'inverted' : ''}`}/>
        </div>
      </a>
      <a href="https://github.com/saoriu" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag('event', 'Github', { 'event_category': 'link', 'event_label': 'Git Click' })}>
        <div className="logo-container">
          <svg className={`github-logo ${isDarkMode ? 'inverted' : ''}`} viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" /></svg>
        </div>
      </a>
      <a href="mailto:saori.uchid@gmail.com" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag('event', 'Email', { 'event_category': 'link', 'event_label': 'Email Click' })}>
        <div className="logo-container">
          <svg fill="white" version="1.1" id="Capa_1" viewBox="0 0 216 216" className={`email-logo ${isDarkMode ? 'inverted' : ''}`}>
            <path d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498
L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616
l49.374-39.276V156z"/>
          </svg>
        </div>
      </a>
    </div>
  )
}

export default Contact;