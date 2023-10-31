import React from 'react';
import './App.css';
import OpenAiForm from './OpenAiForm';
import AnimatedBackground from './AnimatedBackground';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <div className="openai-container">
        <OpenAiForm />
      </div>
    </div>
  );
}

export default App;
