// src/OpenAiForm.js
import React, { useState, useRef, useEffect } from 'react';
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

    const api_key = window.saori_data1.api_key;
    const model = "gpt-3.5-turbo";
    const max_tokens = 500;
    const temperature = .6;
    const url = "https://api.openai.com/v1/chat/completions";
    let messages = [ /* ... your message content ... */ ];
    
    messages.push({"role": "user", "content": prompt});

    try {
      const result = await axios.post(url, {
        model,
        messages,
        max_tokens,
        temperature
      }, {
        headers: {
          "Authorization": `Bearer ${api_key}`,
          "Content-Type": "application/json"
        }
      });

      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      setResponse(`Error: ${error.response?.data?.error?.message || 'Something went wrong.'}`);
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
        <button type="submit">Submit</button>
      </form>
      <div className="openai-response">
        {response}
      </div>
    </div>
  );
}

export default OpenAiForm;
