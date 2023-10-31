import React from 'react';
import './App.css';
import OpenAiForm from './OpenAiForm';
import AnimatedBackground from './AnimatedBackground';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <div className='title'>
      <div className='intro'>
      <h2>Hi! I'm Saori Uchida, a web designer and data analyst based in New York City 👩🏻‍💻</h2>
      <p className='about-me'>Welcome to my corner of the internet! I designed and developed this site using React and animated it with React Spring.</p>
      </div>
      <div className="openai-container">
        </div>
      </div>
    </div>
  );
}

export default App;
