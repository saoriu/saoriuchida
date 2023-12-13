import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import video from './moji.mov';


const OpenAiForm = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const typingTimeout = useRef(null);
  const textareaRef = useRef(null);
  const responseContainerRef = useRef(null);


  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  useEffect(() => {
    let index = 0; // Start from the first character
    let currentDisplay = ''; // Use a local variable to accumulate the display text
  
    const typeCharacter = () => {
      if (index < response.length) {
        currentDisplay += response.charAt(index); // Append the character to the local variable
        setDisplayedResponse(currentDisplay); // Update the state with the current display text
        index++;
        typingTimeout.current = setTimeout(typeCharacter, 50);
      }
    };
  
    if (response) {
      typeCharacter();
    }
  
    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, [response]);
  
  useEffect(() => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
    }
  }, [displayedResponse]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const awsApiGatewayEndpoint = "https://nh5dhpskte.execute-api.us-east-2.amazonaws.com/OpenAI/openai";

    try {
      const result = await axios.post(awsApiGatewayEndpoint, JSON.stringify({ prompt }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error: Something went wrong while processing your request, how unfortunate.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={`openai ${isLoading ? 'loading' : ''}`}>
      <form className="form-ai" onSubmit={handleSubmit}>
        <textarea 
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
          ref={textareaRef}
          placeholder="Ask my AI about me!"
        ></textarea>
        <button type="submit">➡</button>
      </form>
      <div className="response-frame" ref={responseContainerRef}>
      <video className="spacer" height="150px" autoPlay loop muted>
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
 <div className={`openai-response ${displayedResponse || isLoading ? '' : 'hidden'}`}>
    {isLoading ? <div className="typing-animation">...</div> : displayedResponse}
  </div>
</div>
    </div>
  );
};

export default OpenAiForm;
