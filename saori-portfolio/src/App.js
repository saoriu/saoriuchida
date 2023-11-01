import * as React from 'react'
import './App.css';
import AnimatedBackground from './AnimatedBackground';
import OpenAiForm from './OpenAiForm';




function App() {

  
  return (
    <div className="App">
      <AnimatedBackground />
      <div className='title'>
      <div className='intro'>
      <h2>Hi! I'm Saori Uchida, a web designer and data analyst based in New York City 👩🏻‍💻</h2>
      <p className='about-me'>I designed and developed this website using React.</p>
      </div>
      <div className='content'>
      <div className="openai-container">
        <OpenAiForm />
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
