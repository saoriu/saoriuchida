import React, { useState, useRef } from 'react';
import './App.css';
import AnimatedBackground from './AnimatedBackground';
import OpenAiForm from './OpenAiForm';
import OpenAIBadge from './openaibadge.svg';
import ReactLogo from './logo.svg';
import Screenie from './devving.png';
import Modal from 'react-modal';
import Draggable from 'react-draggable';
import Collapsible from 'react-collapsible';
import LinkedInLogo from './linkedin.png';
import farfetch from './farfetch.png';
import eqx from './eqx.svg';
import un from './un.svg';
import maxell from './maxell.png';
import sg from './sg.svg';





function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [reactModalIsOpen, setReactModalIsOpen] = useState(false);
  const [openAiModalIsOpen, setOpenAiModalIsOpen] = useState(false);
  const [awsModalIsOpen, setAwsModalIsOpen] = useState(false);
  const draggableRef = useRef(null);

  
  const customStyles = {
    content: {
      backgroundColor: 'none',
      background: '#1b1a22',
      padding: '30px',
      borderRadius: 'var(--modal-border-radius)',
      boxShadow: 'var(--modal-shadow)',
      display: 'flex',
      flexDirection: 'column',
      border: 'none',
      alignItems: 'center',
      width: '60%', // Adjust the width as desired
      margin: '0 auto', // Center the modal horizontally
      overflowX: 'hidden', // Hide horizontal scrollbar
    },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)', // Change this to your desired color
      },
      button : {
        color: 'white',
        fontSize: '2.5em',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        position: 'absolute',
        right: '10px',
        top: '5px',
      },
      image: {
        width: '100px',
        height: 'auto',
      },
  };



  return (
    <div className="App">
<AnimatedBackground isLoading={isLoading} />
<a href="https://linkedin.com/in/saoriuchida/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInLogo} alt="LinkedIn" className="linkedin-logo" />
      </a>
      <Draggable nodeRef={draggableRef} bounds="parent">
  <div ref={draggableRef} className={`openai-container ${isCollapsed ? 'collapsed' : ''}`}>
    <button className={`ai-button ${isCollapsed ? '' : 'expanded'}`} onClick={() => setIsCollapsed(!isCollapsed)}>
      {isCollapsed ? 'ask my ai' : 'x'}
    </button>
    <Collapsible open={!isCollapsed}>
      <OpenAiForm setIsLoading={setIsLoading} />
    </Collapsible>
  </div>
</Draggable>
      <div className='title'>
      <div className='intro'>
      <h2>Hi! I'm Saori Uchida, a web designer and data analyst based in New York City 👩🏻‍💻</h2>
      <p className='about-me'>
        I built this website using 
        <span className='hover-underline-animation__1' onClick={() => setReactModalIsOpen(true)} style={{color: 'rgb(153 133 255)', cursor: 'pointer', textShadow: 'rgb(60 0 255) 0px 0px 12px'}}> React</span>, 
        and integrated it with 
        <span className='hover-underline-animation__2' onClick={() => setOpenAiModalIsOpen(true)} style={{color: 'rgb(37 143 237)', cursor: 'pointer', textShadow: '0 0 12px #0071d5'}}> OpenAI </span> 
        via my own 
        <span className='hover-underline-animation__3' onClick={() => setAwsModalIsOpen(true)} style={{color: '#ebb66a', cursor: 'pointer', textShadow: 'rgb(255 182 77) 0px 0px 12px'}}> AWS API Gateway </span> 
        to answer questions about myself!
      </p>

      <Modal isOpen={reactModalIsOpen} onRequestClose={() => setReactModalIsOpen(false)} style={customStyles}>
  <button style={customStyles.button} onClick={() => setReactModalIsOpen(false)}>&times;</button>
  <img src={ReactLogo} alt="Resct Logo" className="react-logo" />
  <h2 className='modal-title'>Developing a React Application</h2>
  <div className='modal-section'>
    <h3 className='modal-subtitle'>Why React?</h3>
    <p className='modal-text'>
      My journey with React started in 2020, during the pandemic. Coming from a strong foundation in JavaScript, HTML, and CSS, I saw React as a means to elevate my web development skills and channel my passion for web design, focusing on creating more dynamic, beautiful, and interactive web experiences. React's component-based architecture and its seamless integration with modern JavaScript appealed to me. It offered a way to build dynamic, responsive web applications efficiently, leveraging my existing knowledge in JavaScript, HTML, and CSS.
    </p>
    </div>
    <div className='modal-section'>
  <h3 className='modal-subtitle'>Hooked 🥁</h3>
<p className='modal-text'>
I found that transitioning to React Hooks from traditional React patterns was a game-changer. These enabled me to utilize state and other React features without needing to write a class. This shift not only simplified my code, but also made it more comprehensible and easier to maintain. 
</p>
</div>
<div className='modal-section'>
  <h3 className='modal-subtitle'>This project</h3>
  <p className='modal-text'>
  I used a component-driven approach to develop this project, breaking down the UI into reusable components using JSX. For the OpenAI API, I created OpenAiForm.js with useState, useRef, and useEffect hooks. I used axios to securely communicate with the AWS API Gateway. The AnimatedBackground.js component uses useState and useEffect hooks to manage state and handle lifecycle events. It includes color-shifting wedges with a shuffle array function for color variation and dynamic positioning. Finally, I added an opacity effect on component mounting for enhanced visual appeal.
</p>
<img src={Screenie} alt="My development" className="screenshot" />
  </div>
</Modal>

<Modal isOpen={openAiModalIsOpen} onRequestClose={() => setOpenAiModalIsOpen(false)} style={customStyles}>
  <button style={customStyles.button} onClick={() => setOpenAiModalIsOpen(false)}>&times;</button>
  <img src={OpenAIBadge} alt="OpenAI Badge" className="modal-badge" />
  <h2 className='modal-title'>OpenAI Integration and Custom Model Fine-tuning</h2>
  <div className='modal-section'>
  <h3 className='modal-subtitle'>Project Overview</h3>
  <p className='modal-text'>
  In this project, I demonstrated my ability to integrate advanced AI technologies by connecting a React application with OpenAI's GPT-4. I went beyond simple integration and leveraged the fine-tuning capabilities of OpenAI to create a personalized model. This model was trained on data about my personal and professional experiences, enabling it to generate responses and content that are uniquely tailored to represent my digital persona.
  </p>
</div>
<div className='modal-section'>
  <h3 className='modal-subtitle'>Technical Implementation</h3>
  <p className='modal-text'>
  The integration involves a robust backend infrastructure using AWS Lambda and API Gateway. AWS Lambda serves as the intermediary, ensuring secure communication between the frontend and OpenAI's API without exposing sensitive keys. The API Gateway acts as a controlled access point, providing a RESTful endpoint for frontend requests. This setup not only secures the API key but also enables scalable and efficient request handling, essential for real-time AI interactions.
  </p>
  <pre className='code-frame'>
{`import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const OpenAiForm = ({ setIsLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const textareaRef = useRef(null);
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = \`\${textareaRef.current.scrollHeight}px\`;
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
    <div>
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

export default OpenAiForm;`}
</pre>


</div>
<div className='modal-section'>
  <h4 className='modal-subtitle'>Leveraging AI</h4>
  <p className='modal-text'>
  The potential of AI in crafting digital experiences is immense. Generative language models like GPT-4 are revolutionizing how we interact with digital content. By leveraging these models and with my background in data science and my experience with Python, I position myself at the forefront of this wave. This project exemplifies my ability to create dynamic, responsive, and personalized digital experiences that engage users in meaningful ways.  </p>
</div>
</Modal>


<Modal isOpen={awsModalIsOpen} onRequestClose={() => setAwsModalIsOpen(false)} style={customStyles}>
  <button style={customStyles.button} onClick={() => setAwsModalIsOpen(false)}>&times;</button>
  <img src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" alt="Powered by AWS Cloud Computing" style={customStyles.image} />
      <h2 className='modal-title'>Amazon Web Services API Gateway</h2>
      <div className='modal-section'>
        <h3 className='modal-subtitle'>Project Overview</h3>
        <p className='modal-text'>The purpose of this project was to showcase my skills in API integration, AWS services, and cybersecurity principles. To this, I developed this site as a React application that interacts with OpenAI's API, but instead of directly exposing the API key in the frontend, I created a secure and efficient backend solution using AWS Lambda and API Gateway.</p>
      </div>
      <div className='modal-section'>
        <h4 className='modal-subtitle'>AWS Lambda Function</h4>
        <p className='modal-text'>I created a Lambda function in AWS using Node.js that acts as a middleware between my React app and OpenAI's API. The Lambda function securely stores the OpenAI API key and handles API requests from my frontend application. I also implemented error handling within the function to manage any unexpected interactions with the OpenAI API.</p>
        <h4 className='modal-subtitle'>AWS API Gateway Configuration</h4>
        <p className='modal-text'>I set up an API Gateway in AWS to expose a REST endpoint and configured the endpoint to trigger the Lambda function upon receiving a request. I also utilized API Gateway's built-in features for request validation, rate limiting, and CORS configuration to enhance security and reliability.</p>
        <h4 className='modal-subtitle'>Security Measures</h4>
        <p className='modal-text'>By using AWS Lambda and API Gateway, I ensured that the OpenAI API key is never exposed to the frontend, mitigating the risk of key compromise. I configured appropriate IAM roles and policies in AWS for the principle of least privilege, ensuring that the Lambda function has only the necessary permissions. To track any unusual activities or errors, I enabled logging and monitoring through AWS CloudWatch.</p>
      </div>
</Modal>

      </div>
      
      <div className='content'>
      <h3>WORKED AT</h3>
      <div className='exp'>
      <img src={farfetch} alt="farfetch" className="logo" />
      <img src={sg} alt="sg" className="logo" />
      <img src={eqx} alt="equinox" className="logo" />
      <img src={un} alt="un" className="un-logo" />
      <img src={maxell} alt="maxell" className="logo" />


        </div>
        </div>
      </div>
    </div>
  );
}

export default App;



