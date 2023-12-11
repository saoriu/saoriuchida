import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';

const OpenAiForm = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

    // This should be the endpoint of your AWS API Gateway
    const awsApiGatewayEndpoint = "https://nh5dhpskte.execute-api.us-east-2.amazonaws.com/OpenAI/openai";

    try {
      // We only need to send the prompt to our AWS Lambda, as it will handle the interaction with OpenAI
      const result = await axios.post(awsApiGatewayEndpoint, JSON.stringify({ prompt }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      

      // Assuming your Lambda function returns the response in the same format as the OpenAI API
      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error:', error);
      // Use a more generic error message for the user
      setResponse('Error: Something went wrong while processing your request.');
    }

    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <div id="gif-container">Loading...</div>}
      <form onSubmit={handleSubmit}>
        <textarea 
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          ref={textareaRef}
        ></textarea>
        <button type="submit">send it</button>
      </form>
      <div className="openai-response">
        {response}
      </div>
    </div>
  );
};

export default OpenAiForm;
