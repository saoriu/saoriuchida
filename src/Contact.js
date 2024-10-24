import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function Contact({ isDarkMode }) {
  return (
    <div className='contact'>
      <a href="https://linkedin.com/in/saoriuchida/" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag('event', 'Linkedin', { 'event_category': 'link', 'event_label': 'LinkedIn Click' })}>
        <div className="logo-container">
          <FaLinkedin className={`linkedin-logo ${isDarkMode ? 'inverted' : ''}`} size={30} />
        </div>
      </a>
      <a href="https://github.com/saoriu" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag('event', 'Github', { 'event_category': 'link', 'event_label': 'Git Click' })}>
        <div className="logo-container">
          <FaGithub className={`github-logo ${isDarkMode ? 'inverted' : ''}`} size={30} />
        </div>
      </a>
      <a href="mailto:saori.uchid@gmail.com" target="_blank" rel="noopener noreferrer" onClick={() => window.gtag('event', 'Email', { 'event_category': 'link', 'event_label': 'Email Click' })}>
        <div className="logo-container">
          <MdEmail className={`email-logo ${isDarkMode ? 'inverted' : ''}`} size={30} />
        </div>
      </a>
    </div>
  );
}

export default Contact;