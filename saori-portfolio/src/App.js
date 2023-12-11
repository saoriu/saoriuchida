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
{/* Conditionally render the OpenAiForm based on showForm state */}
  <div className="openai-container">
    <div className="openai-header">
      <h3>AI About Me</h3>
      <p>Built an AI assistant that will answer questions about me!</p>
    </div>
    <OpenAiForm />
  </div>
        </div>
      </div>
    </div>
  );
}

export default App;



