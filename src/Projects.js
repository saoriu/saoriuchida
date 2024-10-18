import React, { useState, useRef, useEffect } from 'react';
import scrape from './images/scrapesight.png';
import sukiImage from './images/title.png';
import gameplay from './images/gameplay.png';
import lighting from './images/lighting.png';
import scraper from './images/scraper.png';
import crafting from './images/crafting.png';
import development from './images/development.png';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';

const importFrames = (prefix, count) => {
    return Array.from({ length: count }, (_, i) => require(`./images/${prefix}_frame_${i}.png`));
};

const sitFrames = importFrames('sit', 8);
const attack5Frames = importFrames('attack5', 14);

const projects = [
    {
        logo: sukiImage,
        title: 'Suki Ran Away',
        summary: 'An HTML5 game I designed and developed from the ground up. Built with JavaScript, utilizing Phaser3 and a Matter.js for game development, and featuring a React-based UI.',
        mainImage: sukiImage,
        thumbnail: gameplay,
        details: `
<div className='modal-section'>
  <p className='modal-text'>
    <strong>Suki Ran Away</strong> is a passion project I first started in high school, refined during my college years, and have continuously improved over time. It’s a rich, multi-faceted game that blends skill progression, player-versus-monster combat, resource gathering, item crafting, and equipment upgrades, all designed to offer dynamic gameplay.
  </p>
  <p className='modal-text'>
    I developed the frontend using <strong>JavaScript/JSX</strong>, employing <strong>Phaser3</strong> as the game development framework and <strong>Matter.js</strong> for physics, while utilizing <strong>React</strong> to manage the UI. The backend is powered by a custom-built <strong>RESTful API</strong> that handles player accounts and save data. An interesting choice of tech stack for a web-game, but since I was already familiar with these languages and frameworks, I've decided to stick with them as they work surprisingly well.
  </p>
  <p className='modal-text'>
    The game also features a time mechanic, where the in-game day/night cycles dynamically affect the gameplay difficulty.
  </p>
</div>
    `,
        images: [
            { src: crafting, caption: 'The story follows Suki, a friendly cat who belonged to a loving family. One night, Suki accidentally tumbles out of a window and gets lost. Her adventure is a journey of survival and exploration as she tries to find her way back home.' },
            { src: lighting, caption: 'I utilized raycasting to support real-time shadows, which rely on light sources that also leverage Phaser’s 2D pipeline. The sun’s position and intensity are calculated based on in-game time, enhancing the immersive experience as objects like trees, monsters, and the main character interact with dynamic lighting.' },
            { src: development, caption: 'One of the key mechanics of the game is procedural generation. This mechanism enables dynamic creation of objects, tiles, and monsters. The system generates the world around the player in real time based on movement and game time. The algorithm spawns different objects like trees, ponds, bushes, and monsters with varying probabilities, creating a fresh and evolving game environment. As the player moves, tiles and objects are dynamically created around them, while distant elements are removed to optimize performance. This approach allows for an expansive and unpredictable world that unfolds as the player explores' },
        ],
        link: 'https://sukiranaway.com',
        linkFrames: {
            sit: sitFrames,
            attack5: attack5Frames,
        },
    },
    {
        logo: scrape,
        title: 'ScrapeSight',
        summary: 'A web scraping tool for extracting and visualizing catalog and market data for e-commerce websites.',
        mainImage: scrape,
        thumbnail: scraper,
        link: 'https://scrapesight.com',
        details: `
<div className='modal-section'>
  <p className='modal-text'>
    <strong>ScrapeSight</strong> is a web scraping tool I built to extract, aggregate, and visualize data from e-commerce websites, specifically designed to track trends in the fashion industry. As a lover of all things fashion, I wanted a tool that could help me stay on top of market trends and pricing shifts in real time. What started as a personal project evolved into a fully-fledged platform with a user-friendly <strong>React</strong> frontend, allowing others to leverage its features.
  </p>

  <p className='modal-text'>
    <strong>Technical Highlights:</strong> The frontend is built using <strong>React</strong>, creating an intuitive interface where users can filter and sort data by brand, pricing, and other key metrics. The backend, powered by <strong>AWS DynamoDB</strong> and <strong>AWS Lambda</strong>, supports scalable data retrieval, while modern web scraping techniques ensure the tool provides accurate, up-to-date data about market trends and sales. Users can filter items by brand, track price changes, and visualize relevant market data through a clean, responsive UI.
  </p>

  <p className='modal-text'>
    The application dynamically sorts and filters data, offering multiple views based on what’s important to the user, whether it’s tracking the last sale date, the total sales value, or price fluctuations. I integrated an infinite scroll feature to load products seamlessly, making sure the experience is fast and smooth across devices, with <strong>Material-UI</strong> and custom CSS driving the responsive design.
  </p>

  <a href='https://scrapesight.com' target='_blank' rel='noopener noreferrer' className='link-container'>
        Click here to try out ScrapeSight
    </a>
</div>
    `,
        images: [
            { src: scraper },
        ],
    },
];

function Projects({ isDarkMode }) {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);
    const [hovered, setHovered] = useState(false);
    const appRef = useRef(null);
    const canvasRef = useRef(null);
    const frameIndexRef = useRef(0);
    const animationRef = useRef(null);
    const offscreenCanvasRef = useRef(document.createElement('canvas'));
    const preloadedImagesRef = useRef({});

    const preloadImages = (frames) => {
        return frames.map(src => {
            const img = new Image();
            img.src = src;
            return img;
        });
    };

    useEffect(() => {
        projects.forEach(project => {
            if (project.linkFrames) {
                preloadedImagesRef.current[project.title] = {
                    sit: preloadImages(project.linkFrames.sit),
                    attack5: preloadImages(project.linkFrames.attack5),
                };
            }
        });
    }, []);

    const handleProjectClick = (index) => {
        if (selectedProject !== null) {
            return; // Prevent clicking on the job again if a project is already selected
        }
        setSelectedProject(index === selectedProject ? null : index);
        if (appRef.current) {
            appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    };

    const handleBackProjectClick = () => {
        appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }

    const fadeInOutSelected = useSpring({
        opacity: selectedProject !== null ? 1 : 0,
        transform: selectedProject !== null ? 'translateY(0)' : 'translateY(-20px)',
        config: { duration: 1000 },
    });

    const fadeInOutNonSelected = useSpring({
        opacity: selectedProject !== null ? 0 : 1,
        transform: selectedProject !== null ? 'translateY(-20px)' : 'translateY(0)',
        config: { duration: 1000 },
    });

    const drawFrame = (frames, delay, onComplete) => {
        if (!canvasRef.current) return; // Ensure canvasRef is not null
        const ctx = canvasRef.current.getContext('2d');
        const offscreenCtx = offscreenCanvasRef.current.getContext('2d');
        let lastFrameTime = performance.now();

        const renderFrame = (time) => {
            if (time - lastFrameTime >= delay) {
                const frame = frames[frameIndexRef.current];
                offscreenCtx.clearRect(0, 0, offscreenCanvasRef.current.width, offscreenCanvasRef.current.height);
                offscreenCtx.drawImage(frame, 0, 0, offscreenCanvasRef.current.width, offscreenCanvasRef.current.height);
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.drawImage(offscreenCanvasRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                frameIndexRef.current = (frameIndexRef.current + 1) % frames.length;
                lastFrameTime = time;
            }

            if (frameIndexRef.current === 0 && onComplete) {
                onComplete();
            } else {
                animationRef.current = requestAnimationFrame(renderFrame);
            }
        };

        animationRef.current = requestAnimationFrame(renderFrame);
    };

    const handleMouseEnter = (frames) => {
        setHovered(true);
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        frameIndexRef.current = 0;
        drawFrame(frames, 54); // Adjust delay for faster frame rate
    };

    const handleMouseLeave = (frames) => {
        setHovered(false);
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        const onComplete = () => {
            if (preloadedImagesRef.current[projects[selectedProject].title]?.sit) {
                drawFrame(preloadedImagesRef.current[projects[selectedProject].title].sit, 125); // Switch to sit animation after hover animation completes
            }
        };
        drawFrame(frames, 70, onComplete); // Continue hover animation until the end of the cycle
    };

    useEffect(() => {
        if (selectedProject !== null && preloadedImagesRef.current[projects[selectedProject].title]?.sit) {
            drawFrame(preloadedImagesRef.current[projects[selectedProject].title].sit, 125); // Initial animation
        }
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [selectedProject]);

    return (
        <div className='work' ref={appRef}>
            <h3>MY PROJECTS</h3>
            <div className='exp'>
                {selectedProject === null ? (
                    projects.map((project, index) => (
                        <animated.div
                            key={index}
                            className={`job ${selectedProject !== null ? 'disabled' : ''}`}
                            style={fadeInOutNonSelected}
                            onClick={() => handleProjectClick(index)}
                        >
                            <div>
                                <img className='main-image' src={project.thumbnail} alt={`${project.title} main`} />
                            </div>
                            <div className='job-title'>
                                <div className='images'>
                                    <img src={project.logo} alt={project.title} className={`logo`} />
                                </div>
                                <h4>{project.title}</h4>
                                <p>{project.summary}</p>
                            </div>
                        </animated.div>
                    ))
                ) : (
                    <>
                        <animated.div
                            className={`job ${selectedProject !== null ? 'disabled' : ''}`}
                            style={fadeInOutSelected}
                            onClick={() => handleProjectClick(selectedProject)}
                        >
                            <div>
                                <img className='main-image' src={projects[selectedProject].thumbnail} alt={`${projects[selectedProject].title} main`} />
                            </div>
                            <div className='job-title'>
                                <div className='images'>
                                    <img src={projects[selectedProject].logo} alt={projects[selectedProject].title} className={`logo`} />
                                </div>
                                <h4>{projects[selectedProject].title}</h4>
                                <p>{projects[selectedProject].summary}</p>
                            </div>
                        </animated.div>
                        <animated.div style={fadeInOutSelected} className='job-details'>
                            <div className='job-description' dangerouslySetInnerHTML={{ __html: projects[selectedProject].details }} />
                            {projects[selectedProject].title === 'Suki Ran Away' && projects[selectedProject].link && projects[selectedProject].linkFrames && (
                                <div className='project-links'>
                                    <a href={projects[selectedProject].link} target="_blank" rel="noopener noreferrer" className='link-container'>
                                        <canvas
                                            ref={canvasRef}
                                            width={74} // Adjust canvas size as needed
                                            height={53} // Adjust canvas size as needed
                                            onMouseEnter={() => handleMouseEnter(preloadedImagesRef.current[projects[selectedProject].title].attack5)}
                                            onMouseLeave={() => handleMouseLeave(preloadedImagesRef.current[projects[selectedProject].title].attack5)}
                                        />
                                        <div className='game-text'>
                                            CLICK ON mochi TO PLAY!
                                        </div>
                                    </a>
                                </div>
                            )}
                            {projects[selectedProject].images.map((image, idx) => (
                                <div key={idx} className='modal-image-container'>
                                    <p className='modal-text'>{image.caption}</p>
                                    <img src={image.src} alt={image.caption} className='job-images' />
                                </div>
                            ))}
                            <button className="button" onClick={() => { setSelectedProject(null); handleBackProjectClick(); }}>Back</button>
                        </animated.div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Projects;