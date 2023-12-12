import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const OpenAiForm = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Define isLoading state here
  const textareaRef = useRef(null);
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

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
    }

    setIsLoading(false);
  };

  return (
    <div className={`openai ${isLoading ? 'loading' : ''}`}>
      <form className="form-ai" onSubmit={handleSubmit}>
        <textarea 
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          ref={textareaRef}
          placeholder="Ask my AI about me!"
        ></textarea>
        <button type="submit">➡</button>
      </form>
      <div className={`openai-response ${response ? '' : 'hidden'}`}>
        {response}
      </div>
    </div>
  );
};

export default OpenAiForm;