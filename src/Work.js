import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate, useLocation } from 'react-router-dom';
import Samples from './Samples';
import { jobs } from './jobsData';

function Work({ isDarkMode }) {
    const [selectedJob, setSelectedJob] = useState(null);
    const [password, setPassword] = useState('');
    const [showSamples, setShowSamples] = useState(false);
    const appRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleJobClick = (index) => {
        if (selectedJob !== null) {
            return; // Prevent clicking on the job again if a project is already selected
        }
        setSelectedJob(index === selectedJob ? null : index);

        // Append the job name to the URL
        const jobName = jobs[index].url.toLowerCase().replace(/\s+/g, '-'); // Convert job title to URL-friendly format
        navigate(`/work/${jobName}`);

        if (appRef.current) {
            appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    };

    const handleBackClick = () => {
        setSelectedJob(null);
        navigate('/work'); // Navigate back to /work without a specific job name
        appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === 'discover') {
            setShowSamples(true);
            appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    const fadeInOutSelected = useSpring({
        opacity: selectedJob !== null ? 1 : 0,
        transform: selectedJob !== null ? 'translateY(0)' : 'translateY(-20px)',
        config: { duration: 1000 },
    });

    const fadeInOutNonSelected = useSpring({
        opacity: selectedJob !== null ? 0 : 1,
        transform: selectedJob !== null ? 'translateY(-20px)' : 'translateY(0)',
        config: { duration: 1000 },
    });

    const fadeInOutExp = useSpring({
        opacity: showSamples ? 0 : 1,
        height: showSamples ? 0 : 'auto',
        config: { duration: 1000 },
    });

    const fadeInOutSamples = useSpring({
        opacity: showSamples ? 1 : 0,
        config: { duration: 1000 },
    });

    // Check the URL and set the selected job based on the job name in the URL
    useEffect(() => {
        const jobNameFromUrl = location.pathname.split('/work/')[1]; // Extract job name from URL
        if (jobNameFromUrl) {
            const jobIndex = jobs.findIndex((job) => job.title.toLowerCase().replace(/\s+/g, '-') === jobNameFromUrl);
            if (jobIndex !== -1) {
                setSelectedJob(jobIndex);
            }
        } else {
            setSelectedJob(null); // If there's no job name in the URL, show all jobs
        }
    }, [location.pathname]);

    return (
        <div className='work' ref={appRef}>
            {!showSamples && (
            <div className='exp'>
                    {selectedJob === null && 
                        <animated.div className='exp-title' style={fadeInOutNonSelected}>
                            <h2>My work</h2>
                            <p>With a background in economics and computer science, I found product management allows me to play to my strengths in data analysis and engage in my passion for solving technical problems. Specializing in e-commerce, I have led cross-functional teams through transformations that leverage new enabling technologies and data-driven insights to deliver measurable business outcomes while enhancing the user experience.</p>
                        </animated.div>
                    }
                    {selectedJob === null ? (
                        jobs.map((job, index) => (
                            <animated.div
                                key={index}
                                className={`job ${selectedJob !== null ? 'disabled' : ''}`}
                                style={fadeInOutNonSelected}
                                onClick={() => handleJobClick(index)}
                            >
                                <div>
                                    <img className='main-image' src={job.mainImage} alt={`${job.title} main`} />
                                </div>
                                <div className='job-title'>
                                    <div className='images'>
                                        <img src={job.logo} alt={job.title} className={`logo ${isDarkMode ? 'invert' : ''}`} />
                                    </div>
                                    <h4>{job.title}</h4>
                                    <p>{job.summary}</p>
                                </div>
                            </animated.div>
                        ))
                    ) : (
                        <>
                            <animated.div
                                className={`job ${selectedJob !== null ? 'disabled' : ''}`}
                                style={fadeInOutSelected}
                                onClick={() => handleJobClick(selectedJob)}
                            >
                                <div>
                                    <img className='main-image' src={jobs[selectedJob].mainImage} alt={`${jobs[selectedJob].title} main`} />
                                </div>
                                <div className='job-title'>
                                    <div className='images'>
                                        <img src={jobs[selectedJob].logo} alt={jobs[selectedJob].title} className={`logo ${isDarkMode ? 'invert' : ''}`} />
                                    </div>
                                    <h4>{jobs[selectedJob].title}</h4>
                                    <p>{jobs[selectedJob].summary}</p>
                                </div>
                            </animated.div>
                            <animated.div style={fadeInOutSelected} className='job-details'>
                                <div className='job-description' dangerouslySetInnerHTML={{ __html: jobs[selectedJob].details }} />
                                {jobs[selectedJob].workSample ? (
                                    <div className='form-container'>
                                        <p className='modal-text'>Enter password to view more detailed work samples</p>
                                        <form onSubmit={handlePasswordSubmit}>
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter password"
                                            />
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div>
                                ) : null}
                                {jobs[selectedJob].images.map((image, idx) => (
                                    <div key={idx} className='modal-image-container'>
                                        {jobs[selectedJob].workSample ? (
                                            <>
                                                <p className='modal-text'>{image.caption}</p>
                                                <img src={image.src} alt={image.caption} className='job-images' />
                                            </>
                                        ) : (
                                            <>
                                                <img src={image.src} alt={image.caption} className='job-images' />
                                                <p className='modal-text caption'>{image.caption}</p>
                                            </>
                                        )}
                                    </div>
                                ))}
                                <button className="button backhome" onClick={() => { setSelectedJob(null); handleBackClick(); }}>Back</button>
                            </animated.div>
                        </>
                    )}
                </div>
            )}
            {showSamples && (
                <animated.div style={fadeInOutSamples}>
                    <Samples isDarkMode={isDarkMode} />
                </animated.div>
            )}
        </div>
    );
}

export default Work;

