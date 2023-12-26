import React, { useState, useRef, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Modal from 'react-modal';
import Draggable from 'react-draggable';
import AnimatedBackground from './AnimatedBackground';
import OpenAiForm from './OpenAiForm';
import OpenAIBadge from './openaibadge.svg';
import ReactLogo from './logo.svg';
import Screenie from './devving.png';
import Collapsible from 'react-collapsible';
import LinkedInLogo from './linkedin.png';
import farfetch from './farfetch.png';
import eqx from './eqx.svg';
import un from './un.svg';
import maxell from './maxell.png';
import sg from './sg.svg';
import hpeqxnew from './hp-eqx-new.png';
import oldhp from './oldhp.png';
import hpeqx from './hp-eqx.png';
import pdpeqx from './PDP-eqx.png';
import factilanding from './facti-landing.png';
import un1 from './un.png';
import trade from './trade.png';
import earbuds from './earbuds.jpg';
import adobe from './adobe.png';
import sizing from './sizing.png';
import async from './async.gif';
import search from './search.png';
import releases from './releases.png';
import lambda from './lambda.png';
import cvr from './cvr.png';

const imageUrls = [search, earbuds, factilanding, hpeqxnew];

function preloadImages() {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const draggableRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState({
    farfetch: false,
    sg: false,
    eqx: false,
    un: false,
    maxell: false,
    aws: false,
    ai: false,
    react: false,
  });

  const [expandedElement, setExpandedElement] = useState(null);

  function handleClick(e) {
    if (expandedElement) {
      expandedElement.classList.remove('expand');
    }
    if (expandedElement !== e.currentTarget) {
      e.currentTarget.classList.add('expand');
      setExpandedElement(e.currentTarget);
    } else {
      setExpandedElement(null);
    }
  }
  const handleOpenModal = (name) => {
    setIsModalOpen({ ...isModalOpen, [name]: true });
  };

  const handleCloseModal = (name) => {
    setIsModalOpen({ ...isModalOpen, [name]: false });
  };
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
      width: '55%', // Adjust the width as desired
      margin: '0 auto', // Center the modal horizontally
      overflowX: 'hidden', // Hide horizontal scrollbar
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.25)', // Change this to your desired color
    },
    button: {
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

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isModalOpen]);


  return (
    <div className="App">
      <Analytics />
      <AnimatedBackground isLoading={isLoading} />
      <div className='title'>
      <div className='contact'>
        <a href="https://linkedin.com/in/saoriuchida/" target="_blank" rel="noopener noreferrer">
        <div className="logo-container">
          <img src={LinkedInLogo} alt="LinkedIn" className="linkedin-logo"/>
          </div>
        </a>
        <a href="https://github.com/saoriu" target="_blank" rel="noopener noreferrer">
        <div className="logo-container">
        <svg className="github-logo" viewBox="0 0 100 100"width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>       
        </div>
         </a>
        <a href="mailto:saori.uchid@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className="logo-container">
          <svg fill="white" version="1.1" id="Capa_1" viewBox="0 0 216 216" className="email-logo">
            <path d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498
            L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616
            l49.374-39.276V156z"/>
          </svg>
          </div>
        </a>
      </div>
        <button className={`ai-button ${isCollapsed ? 'collapsed' : 'expanded'}`} onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? 'ask my ai' : 'ask my ai'}
        </button>
        {windowWidth > 650 ? (
          <Draggable
            nodeRef={draggableRef}
            disabled={isCollapsed}
          >
            <div ref={draggableRef} className={`openai-container ${isCollapsed ? 'collapsed' : ''}`}>
            <Collapsible open={!isCollapsed}>
                <button className="x-button" onClick={() => setIsCollapsed(!isCollapsed)}>
                  x
                </button>
                <OpenAiForm setIsLoading={setIsLoading} />
                </Collapsible>
            </div>
          </Draggable>
        ) : (
          <div className={`openai-container ${isCollapsed ? 'collapsed' : ''}`}>
            <Collapsible open={!isCollapsed}>
              <button className="x-button" onClick={() => setIsCollapsed(!isCollapsed)}>
                x
              </button>
              <OpenAiForm setIsLoading={setIsLoading} />
            </Collapsible>
          </div>
        )}
        <div className='intro'>
          <h2>Hi! I'm Saori Uchida, a web designer, data analyst, and big sister based in New York 👩🏻‍💻</h2>
          <p className='about-me'>
            I developed this
            <span className='hover-underline-animation__1' onClick={() => handleOpenModal('react')} style={{ color: 'rgb(153 133 255)', cursor: 'pointer', textShadow: 'rgb(60 0 255) 0px 0px 12px' }}> React </span>
            application and integrated it with
            <span className='hover-underline-animation__2' onClick={() => handleOpenModal('ai')} style={{ color: 'rgb(37 143 237)', cursor: 'pointer', textShadow: '0 0 12px #0071d5' }}> OpenAI </span>
            via my own
            <span className='hover-underline-animation__3' onClick={() => handleOpenModal('aws')} style={{ color: '#ebb66a', cursor: 'pointer', textShadow: 'rgb(255 182 77) 0px 0px 12px' }}> AWS API Gateway </span>
            to share my work and interests!
          </p>

          <Modal isOpen={isModalOpen.react} onRequestClose={() => handleCloseModal('react')}  style={customStyles} ariaHideApp={false}
            onAfterClose={() => document.body.style.overflow = 'auto'}             >
            <button style={customStyles.button} onClick={() => handleCloseModal('react')}>&times;</button>
            <img src={ReactLogo} alt="React Logo" className="react-logo" />
            <h2 className='modal-title'>Developing a React Application</h2>
            <div className='modal-section'>
              <h3 className='modal-subtitle'>Why React?</h3>
              <p className='modal-text'>
                My journey with React started in 2020, during the pandemic. Coming from a strong foundation in JavaScript, HTML, and CSS, I saw React as a means to elevate my web development skills and channel my passion for web design, focusing on creating more dynamic, beautiful, and interactive web experiences. React's component-based architecture and its seamless integration with modern JavaScript appealed to me. It offered a way to build dynamic, responsive web applications efficiently, leveraging my existing knowledge in JavaScript, HTML, and CSS.
              </p>
            </div>
            <div className='modal-section'>
              <h3 className='modal-subtitle'>Hooking up</h3>
              <p className='modal-text'>
                I found that transitioning to React hooks from traditional React patterns was a game-changer. These enabled me to utilize state and other React features without needing to write a class. This shift not only simplified my code, but also made it more comprehensible and easier to maintain.
              </p>
            </div>
            <div className='modal-section'>
              <h3 className='modal-subtitle'>This project</h3>
              <p className='modal-text'>
                I used a component-driven approach to develop this project, breaking down the UI into reusable components using JSX. For the OpenAI API, I created OpenAiForm.js with useState, useRef, and useEffect hooks. I used axios to securely communicate with the AWS API Gateway. The AnimatedBackground.js component uses useState and useEffect hooks to manage state and handle lifecycle events. It includes color-shifting wedges with a shuffle array function for color variation and dynamic positioning. Finally, I added an opacity effect on component mounting for enhanced visual appeal.
              </p>
            </div>
            <img src={Screenie} alt="My development" className="hpeqxnew" />
          </Modal>

          <Modal isOpen={isModalOpen.ai} onRequestClose={() => handleCloseModal('ai')} style={customStyles} ariaHideApp={false}
            onAfterClose={() => document.body.style.overflow = 'auto'} 
                        >
            <button style={customStyles.button} onClick={() => handleCloseModal('ai')}>&times;</button>
            <img src={OpenAIBadge} alt="OpenAI Badge" className="modal-badge" />
            <h2 className='modal-title'>OpenAI Integration and Custom Model Fine-tuning</h2>
            <div className='modal-section'>
              <h3 className='modal-subtitle'>Project Overview</h3>
              <p className='modal-text'>
                In this project, I demonstrated my ability to manipulate generative AI models by integrating this React application with OpenAI's API. This particular model was trained on data about my personal and professional experiences.
              </p>
            </div>
            <div className='modal-section'>
              <h3 className='modal-subtitle'>Technical Implementation</h3>
              <p className='modal-text'>
                The integration involves a robust backend infrastructure using AWS Lambda and API Gateway. AWS Lambda serves as the intermediary, ensuring secure communication between the frontend and OpenAI's API without exposing sensitive keys. The API Gateway acts as a controlled access point, providing a RESTful endpoint for frontend requests. This setup not only secures the API key but also enables scalable and efficient request handling, essential for real-time AI interactions.
              </p>
            </div>
            <div className='modal-section'>
              <h3 className='modal-subtitle'>Leveraging AI</h3>
              <p className='modal-text'>
                Although sensationalized, AI is changing how we interact with data and digital content. My hands-on experience implementing machine learning algorithms and with my background in UX design, I can sift through the hype to create valuable experiences for users. This project exemplifies my ability to create dynamic, responsive, and personalized digital touchpoints that engage users in meaningful ways.</p>
            </div>
          </Modal>

          <Modal isOpen={isModalOpen.aws} onRequestClose={() => handleCloseModal('aws')} style={customStyles} ariaHideApp={false}
            onAfterClose={() => document.body.style.overflow = 'auto'} 
            >
            <button style={customStyles.button} onClick={() => handleCloseModal('aws')}>&times;</button>
            <img src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" alt="Powered by AWS Cloud Computing" style={customStyles.image} />
            <h2 className='modal-title'>Amazon Web Services API Gateway</h2>
            <div className='modal-section'>
              <h3 className='modal-subtitle'>Project Overview</h3>
              <p className='modal-text'>The purpose of this project was to showcase my skills in API integration, AWS services, and cybersecurity principles. I developed this site as a React application that interacts with OpenAI's API, but instead of directly exposing the API key in the frontend, I created a secure and efficient backend solution using AWS Lambda and API Gateway.</p>
            </div>
            <div className='modal-section'>
              <h3 className='modal-subtitle'>AWS Lambda Function</h3>
              <p className='modal-text'>I created a Lambda function in AWS using Node.js that acts as a middleware between my React app and OpenAI's API. The Lambda function securely stores the OpenAI API key and handles API requests from my frontend application. I also implemented error handling within the function to manage any unexpected interactions with the OpenAI API.</p>
              <h3 className='modal-subtitle'>AWS API Gateway Configuration</h3>
              <p className='modal-text'>I set up an API Gateway in AWS to expose a REST endpoint and configured the endpoint to trigger the Lambda function upon receiving a request. I also utilized API Gateway's built-in features for request validation, rate limiting, and CORS configuration to enhance security and reliability.</p>
              <h3 className='modal-subtitle'>Security Measures</h3>
              <p className='modal-text'>By using AWS Lambda and API Gateway, I ensured that the OpenAI API key is never exposed to the frontend, mitigating the risk of key compromise. I configured appropriate IAM roles and policies in AWS for the principle of least privilege, ensuring that the Lambda function has only the necessary permissions. To track any unusual activities or errors, I enabled logging and monitoring through AWS CloudWatch.</p>
            </div>
            <img src={lambda} alt="Lambda and api gateway" className="hpeqxnew" />
          </Modal>

        </div>

        <div className='content'>
          <h3>WORKED AT</h3>
          <div className='exp'>
          <span className='images'>
              <img src={farfetch} alt="farfetch" className="logo" onClick={() => handleOpenModal('farfetch')} />
              /
              <img src={sg} alt="farfetch" className="logo" onClick={() => handleOpenModal('farfetch')} />
              </span>
            <Modal isOpen={isModalOpen.farfetch} onRequestClose={() => handleCloseModal('farfetch')} style={customStyles} ariaHideApp={false}
              onAfterClose={() => document.body.style.overflow = 'auto'} 
              >
              <button style={customStyles.button} onClick={() => handleCloseModal('farfetch')}>&times;</button>
              <span className='images'>
                <img src={farfetch} alt="FARFETCH logo" className="logo"/>
                /
                <img src={sg} alt="stadium goods logo" className="logo" />
              </span>
              <h2 className='modal-title'>Technical Product Manager, Ecommerce</h2>
              <div className='modal-image-container'>
                <img src={search} alt="Stadium goods new search experience by Saori Uchida" className="hpeqxnew" preload="auto" />
                <p className='modal-text caption'>Predictive search modal that passes requests through ML ranking algorithms</p>
              </div>
              <div className='modal-section'>
                <p className='modal-text'>I began working at Stadium Goods a few years after it had been acquired by Farfetch, and just a few months prior to the wave of mass layoffs across tech. Despite the challenges that came with an ever-shrinking team and the complicated dynamics between the business and platform, my ability to quickly understand the technical complexities of the product and manage myself and others accordingly has allowed me to make significant contributions to the DTC strategy and consistently deliver improvements to the user experience.</p>
              </div>
              <div className='modal-image-container'>
                <img src={releases} alt="Stadium goods new search experience by Saori Uchida" className="hpeqxnew" />
                <p className='modal-text caption'>Release timeline for the various epics I led throughout the year</p>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>Managing product</h3>
                <p className='modal-text'>My role is to manage a comprehensive product roadmap for our app and website,  encompasing both technical and UX/UI aspects. This involves defining product requirements, managing the product backlog, and prioritizing features and improvements strategically. I follow Agile methodologies and work closely with designers, developers, and stakeholders to ensure that our features align with business goals and adhere to projected timelines. During my tenure at the company and against all adversities, I've consistently delivered exceptional improvements to overall conversion and performance.   </p>
                <p className='modal-text'>To break down complex projects into manageable tasks, we use the Scrum framework and track progress using JIRA to maintain visibility across all stages of development. To identify areas for improvement, I engage in comprehensive user research and data analysis. Additionally, I oversee the creation of technical documentation.</p>
              </div>
              <div className='modal-image-container'>
                <img src={cvr} alt="Stadium goods conversion improvements as a result of optimizations" className="hpeqxnew" />
                <p className='modal-text caption'>My product enhancements and optimizations have contributed to a 45% lift in YoY conversion rate</p>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>Features shipped</h3>
                <p className='modal-text'>Some of my key achievements to optimize the user experience along every step of the funnel included:</p>
                <p className='modal-text'>
                  <li>Size scale conversion on PDP</li>
                  <li>Address auto-complete on checkout</li>
                  <li>Estimated delivery date on buy box</li>
                  <li>'Notify me' on serial restock</li>
                  <li>ApplePay on PDP</li>
                  <li>Asynchronous response on 'add to bag'</li>
                  <li>Predictive site search</li>
                  <li>Footer expansion for SEO</li>
                  <li>Ingesting new product attributes on listing page filters</li>
                  <li>Streamlining search and navigation UI as well as implementing personalized quick filters on PLP</li>
                  <li>Promotional countdown timers on PDP</li>
                  <li>Personalized category sliders</li>
                  <li>Urgency messaging on size selection around serial availability</li>
                  <li>Streamlining new user tutorial and user account screens on app</li>
                  <li>Bolstering event tracking</li>
                </p>
                <p className='modal-text'>Beyond building and improving frontend features, I leveraged my technical acumen to identify and solve issues related to main-thread blocking and client-side rendering, redundant and inefficiently structured API calls, gaps in bot traffic prevention, and legacy functions that were severly impacting core web vitals and causing delays at crucial steps in the conversion funnel.</p>
                <p className='modal-text'>Additionally, I developed and maintained a Python web scraper to parse market data from competitors. One of my key achievements was overseeing the discoverability project to optimize product catalog taxonomy, resulting in a simplified user navigation experience. I also created analytics dashboards, automated reports, and SQL tables to monitor both catalog and e-commerce performance and health. I reported to top management and key stakeholders on site and app performance against key objectives and business goals, supporting marketing and merchandising initiatives.</p>
              </div>
              <div className='modal-container'>
                <div className='modal-image-container third' onClick={handleClick}>
                  <img src={sizing} alt="Last 1 at this size feature on Stadium Goods PDP by Saori Uchida" className="modal-image" />
                  <p className='modal-text caption'>Last serial at this price feature on product page</p>
                </div>
                <div className='modal-image-container third' onClick={handleClick}>
                  <img src={async} alt="Equinox the shop new PDP figma by Saori Uchida" className="modal-image" />
                  <p className='modal-text caption'>Mini bag modal displayed asynchronously on 'add to bag', bypassing delay from slow API response </p>
                </div>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>Embracing agile</h3>
                <p className='modal-text'>My competencies in user-centric development, agile project management, and cross-functional collaboration have been honed through my experiences at Farfetch. I prioritize data insights to continually refine the user experience and find opportunities for personalziation. In a hype-driven market, I've learned to prioritize a flexible, responsive approach to product development, ensuring alignment with evolving customer needs and market trends.</p>
              </div>
            </Modal>

            <img src={eqx} alt="equinox" className="logo" onClick={() => handleOpenModal('eqx')} />
            <Modal isOpen={isModalOpen.eqx} onRequestClose={() => handleCloseModal('eqx')} style={customStyles} ariaHideApp={false}
              onAfterClose={() => document.body.style.overflow = 'auto'} 
              >
              <button style={customStyles.button} onClick={() => handleCloseModal('eqx')}>&times;</button>
              <img src={eqx} alt="Equinox logo" className="logo" />
              <h2 className='modal-title'>Manager, Digital Merchandising</h2>
              <div className='modal-image-container'>
                <img src={hpeqxnew} alt="Equinox the shop new homepage UX/UI by Saori Uchida" className="hpeqxnew " preload="auto" />
                <p className='modal-text caption'>The finished product, currently live at shop.equinox.com</p>
              </div>
              <div className='modal-section'>
                <p className='modal-text'>Due to the small size of the Retail team at Equinox, I took on the responsibilities of e-commerce manager, front-end developer, digital merchandiser, and product manager during my tenure at Equinox. Joining the company shortly after the peak of the pandemic, I was instrumental in evolving the retail strategy — going beyond the out-of-the-box Shopify storefront that had been initially deployed amid the physical store limitation imposed by quarentine.</p>
              </div>
              <div className='modal-container'>
                <div className='modal-section mini'>
                  <h3 className='modal-subtitle'>Opportunity</h3>
                  <p className='modal-text'>Recognizing a critical misalignment between Equinox's exclusive brand identity and the existing e-commerce experience, I spearheaded the design and development of a custom Shopify theme.</p>
                  <p className='modal-text'>This initiative was not just a design overhaul; it was a strategic alignment of the online retail experience with Equinox's core ethos of luxury and high performance, seamlessly integrating with the primary Equinox.com platform and the Equinox+ app.</p>
                </div>
                <div className='modal-image-container first' onClick={handleClick}>
                  <img src={oldhp} alt="Original Equinox The Shop homepage" className="modal-image" />
                  <p className='modal-text caption'>The original design of The Shop homepage.</p>
                </div>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>Owning the product</h3>
                <p className='modal-text'>My approach was collaborative yet autonomous. I worked closely with senior UX designers, product managers, marketing experts, and engineering leaders, gaining essential support and insights. My direct involvement spanned the entire product development lifecycle, from initial wireframing to coding and final deployment. This hands-on experience in web design and development was pivotal in steering the project towards success.</p>
              </div>
              <div className='modal-container'>
                <div className='modal-image-container second' onClick={handleClick}>
                  <img src={hpeqx} alt="Equinox the shop new homepage Figma by Saori Uchida" className="modal-image" />
                </div>
                <div className='modal-image-container second' onClick={handleClick}>
                  <img src={pdpeqx} alt="Equinox the shop new PDP figma by Saori Uchida" className="modal-image" />
                </div>
              </div>
              <p className='modal-text caption'>Desktop homepage and product page design figmas for this project</p>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>Merging to main</h3>
                <p className='modal-text'>The outcome was a transformative improvement in the online shopping experience across the funnel, evidenced by a remarkable 40% enhancement in Shopify's key performance metrics and an exponential increase in conversion rates. This project not only bolstered the retail arm of Equinox but also showcased my comprehensive capabilities in product management, web design, and development, underlining my ability to drive significant business outcomes through strategic digital innovation and crossfunctional collaboration.</p>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>High-performance living</h3>
                <p className='modal-text'>My time at Equinox was extremely formative both personally and professionally. At the company I had the honor of being a part of a tight-knit team of incredible people, all who embodied the ethos of high-perofrmance in their work. The opportunity to have been mentored by the very best in retail, engineering, and management was profoundly life-changing.</p>
              </div>
            </Modal>

            <img src={un} alt="un" className="un-logo" onClick={() => handleOpenModal('un')} />
            <Modal isOpen={isModalOpen.un} onRequestClose={() => handleCloseModal('un')} style={customStyles} ariaHideApp={false}
              onAfterClose={() => document.body.style.overflow = 'auto'} 
              >
              <button style={customStyles.button} onClick={() => handleCloseModal('un')}>&times;</button>
              <img src={un} alt="United Nations logo" className="un-logo" />
              <h2 className='modal-title'>Intern, Economic Affairs</h2>
              <div className='modal-image-container'>
                <img src={factilanding} alt="The website of the final report of the FACTI Panel" className="hpeqxnew" preload="auto" />
                <p className='modal-text caption'>The website for the final report</p>
              </div>
              <div className='modal-section'>
                <p className='modal-text'>While pursuing a career in data science, I seized an opportunity to intern with the United Nations Department of Economic and Social Affairs (UNDESA). This internship aligned perfectly with my aspiration at the time, to better understand how advanced data analysis is translated into actionable insights that drive tangible impact.</p>
                <p className='modal-text mini'>Fun fact: My dream at the time was to work for the CIA, but I later learned they only hire Americans so figured the UN was the next best thing!</p>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>The High Level Panel</h3>
                <p className='modal-text'>My tenure as an Economic Affairs Intern was primarily dedicated to supporting the FACTI Panel—The High-Level Panel on International Financial Accountability, Transparency, and Integrity for Achieving the 2030 Agenda. The FACTI Panel was a beacon of global efforts in enhancing financial accountability and integrity, key pillars in realizing the ambitious 2030 Agenda for Sustainable Development.</p>
                <p className='modal-text'>Co-chaired by the former Prime Minister of Niger, Ibrahim Assane Mayaki and the former President of Lithuania, Dalia Grybauskaitė, the panel consisted of a diverse group of experts and world leaders, each contributing their rich perspectives and insights ranging from trade to cybersecurity and cryptocurrency. The panel's mandate was broad yet clear: scrutinize prevailing challenges and trends in financial accountability, transparency, and integrity, and furnish evidence-based recommendations to bridge gaps in the international system.</p>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>A master class in consensus-building</h3>
                <p className='modal-text'>At a critical juncture of the project—when the high-level members were negotiating to reach a consensus on global recommendations—I was deeply involved in the thick of political debate and consensus-building. This exposure was instrumental in honing my skills in stakeholder management and project management.</p>
                <p className='modal-text'>A significant part of my responsibility involved conducting econometric research, particularly around trade misinvoicing, one of the panel's focal areas. This task was not just about data analysis; it encompassed marketing research and storytelling, skills vital in product management for understanding and communicating complex concepts effectively.</p>
                <p className='modal-text'>My culminating project was to design and build the landing page and executive summary for the panel's final report, employing HTML and CSS. This task was a testament to my technical acumen and ability to deliver tangible products that communicate complex ideas in an accessible manner.</p>
              </div>
              <div className='modal-image-container'>
                <img src={trade} alt="Trade misinvoicing data module: my contributing section in the final report of the FACTI Panel" className="hpeqxnew" />
                <p className='modal-text caption'>Trade misinvoicing data module: my contributing section in the final report</p>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>Meaningful impact</h3>
                <p className='modal-text'>The impact of the FACTI Panel's work is monumental and set to influence generations. Engaging with former presidents, world leaders, renowned lawyers, and scholars was an enriching experience that broadened my perspective and deepened my understanding of global economic policies. As a product manager, these experiences have been invaluable, equipping me with a unique blend of technical skills, policy understanding, and a global outlook—essential tools for leading projects that drive meaningful change.</p>
              </div>
              <div className='modal-image-container'>
                <img src={un1} alt="UN Secretary General Anotnio Gutierres delivering opening remarks at COP21" className="hpeqxnew" />
                <p className='modal-text caption'>UN Secretary General delivering opening remarks at COP21</p>
              </div>
            </Modal>

            <img src={maxell} alt="maxell" className="logo" onClick={() => handleOpenModal('maxell')} />
            <Modal isOpen={isModalOpen.maxell} onRequestClose={() => handleCloseModal('maxell')} style={customStyles} ariaHideApp={false}
              onAfterClose={() => document.body.style.overflow = 'auto'} 
              >
              <button style={customStyles.button} onClick={() => handleCloseModal('maxell')}>&times;</button>
              <img src={maxell} alt="Maxell logo" className="logo" />
              <h2 className='modal-title'>Web Designer</h2>
              <div className='modal-image-container'>
                <img src={earbuds} alt="Marketing asset for Maxell designed by Saori Uchida" className="hpeqxnew" preload="auto" />
                <p className='modal-text caption'>Marketing asset designed for product launch</p>
              </div>
              <div className='modal-section'>
                <p className='modal-text'>One of my most formative professional experiences in web and graphic design was at Japanese electronics company Maxell, supporting the Latin America office in Chile. During my time there, I evolved my understanding of the design process by producing mockups, wireframes, and interactive prototypes, polishing my design skills and showcasing my understanding of typography, color theory, and layout composition.</p>
              </div>
              <div className='modal-section'>
                <h3 className='modal-subtitle'>Visual identities</h3>
                <p className='modal-text'>As a part of a larger team, I assisted in conducting customer and market research to translate the business's value props into a strong visual identity and seamless digital experience.</p>
                <p className='modal-text'>Leveraging the full capabilities of Adobe Creative Suite, particularly Adobe Photoshop, I mastered complex techniques such as layer masking, advanced compositing, and color grading to create high-quality visual assets. My proficiency in Photoshop's 3D rendering and image manipulation enabled me to deliver striking visuals that elevated brand messaging. Using CodePen, I created interactive HTML/CSS/JavaScript snippets for landing pages, ensuring they were responsive and engaging. Over my tenure, I produced hundreds of assets and landing pages that significantly boosted marketing initiatives and activations.</p>
              </div>
              <div className='modal-image-container'>
                <img src={adobe} alt="United Nations logo" className="hpeqxnew" />
                <p className='modal-text caption'>Marketing asset produced in Adobe Photoshop</p>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;