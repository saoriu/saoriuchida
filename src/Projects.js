import React, { useState, useRef, useEffect } from 'react';
import { projects } from './projectsData';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate, useLocation } from 'react-router-dom';

function Projects({ isDarkMode }) {
    const navigate = useNavigate();
    const location = useLocation();
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
            return; // Prevent clicking on the project again if a project is already selected
        }
        setSelectedProject(index === selectedProject ? null : index);

        // Append the project name to the URL
        const projectName = projects[index].url.toLowerCase().replace(/\s+/g, '-'); // Convert project title to URL-friendly format
        navigate(`/projects/${projectName}`);

        if (appRef.current) {
            appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    };

    const handleBackProjectClick = () => {
        setSelectedProject(null);
        navigate('/projects'); // Navigate back to /projects without a specific project name
        appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

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

    // Check the URL and set the selected project based on the project name in the URL
    useEffect(() => {
        const projectNameFromUrl = location.pathname.split('/projects/')[1]; // Extract project name from URL
        if (projectNameFromUrl) {
            const projectIndex = projects.findIndex((project) => project.title.toLowerCase().replace(/\s+/g, '-') === projectNameFromUrl);
            if (projectIndex !== -1) {
                setSelectedProject(projectIndex);
            }
        } else {
            setSelectedProject(null); // If there's no project name in the URL, show all projects
        }
    }, [location.pathname]);

    return (
        <div className='work' ref={appRef}>
            <div className='exp'>
                {selectedProject === null && 
                    <animated.div className='exp-title' style={fadeInOutNonSelected}>
                        <h2>My projects</h2>
                        <p>Coding and web design have been creative outlets for me ever since I got my hands on the family computer running Windows 95. Over the years, I’ve learned languages like HTML, CSS, Javascript, and Python, as well as frameworks like React and Phaser, as a way to bring my ideas to life. Here are just a few of the many projects I’ve worked on independently.</p>
                    </animated.div>
                }
                {selectedProject === null ? (
                    projects.map((project, index) => (
                        <animated.div
                            key={index}
                            className={`job ${selectedProject !== null ? 'disabled' : ''} ${!project.ready ? 'pending' : ''}`}
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
                            {projects[selectedProject].title === 'Suki Ran Away™' && projects[selectedProject].link && projects[selectedProject].linkFrames && (
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
                            <button className="button backhome" onClick={handleBackProjectClick}>Back</button>
                        </animated.div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Projects;