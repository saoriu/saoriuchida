import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

import farfetch from './images/farfetch.png';
import eqx from './images/eqx.svg';
import un from './images/un.svg';
import maxell from './images/maxell.png';
import hpeqxnew from './images/hp-eqx-new.png';
import oldhp from './images/oldhp.png';
import hpeqx from './images/hp-eqx.png';
import pdpeqx from './images/PDP-eqx.png';
import factilanding from './images/facti-landing.png';
import un1 from './images/un.png';
import trade from './images/trade.png';
import earbuds from './images/earbuds.jpg';
import adobe from './images/adobe.png';
import sizing from './images/sizing.png';
import async from './images/async.gif';
import search from './images/search.png';
import releases from './images/releases.png';
import cvr from './images/cvr.png';

const jobs = [
    {
        logo: farfetch,
        title: 'Product Manager, DTC',
        summary: 'Managed and outlined a product roadmap for an app and website within FARFETCH, delivering measurable improvements to the user experience by strategically focusing on personalization and platform performance.',
        mainImage: releases,
        details: `
    <p>I joined <strong>FARFETCH</strong> during a time of rapid change and increasing pressure within the tech industry. My ability to quickly familiarize myself with the data, grasp the technical complexities of the product, take initiative, and manage both myself and others allowed me to make a significant impact on business outcomes and consistently enhance the user experience.</p>
    <p>In my role, I managed a comprehensive product roadmap for both app and website, covering a range of technical and UX/UI initiatives. This involved defining detailed product requirements, managing the product backlog, and strategically prioritizing features and optimizations. I focused on areas like improving site performance, optimizing checkout flows, and enhancing mobile engagement.</p>
    <p>By following Agile methodologies, I collaborated closely with designers, developers, and stakeholders, ensuring that projects align with business goals and are delivered within projected timelines, always prepared for a change in circumstances or direction. I also led key initiatives that resulted in notable improvements to conversion rates, performance metrics, and user engagement, all while driving efforts to maintain a seamless integration between e-commerce operations and platform capabilities.</p>
    <p>Through a proactive and self-starter mindset, I consistently delivered results that directly contributed to business and user growth.</p>
  `,
        images: [
            { src: search, caption: 'Predictive search modal that passes requests through ML ranking algorithms' },
            { src: releases, caption: 'Release timeline for the various initatives I led throughout the year' },
            { src: cvr, caption: 'My product enhancements and optimizations have contributed to a 45% lift in YoY conversion rate' },
            { src: sizing, caption: 'Last serial at this price feature on product page' },
        ],
    },
    {
        logo: eqx,
        title: 'Manager, E-commerce',
        summary: 'Led the re-design and development of The Shop\'s new digital storefront, aligning the online retail experience with Equinox\'s luxury brand identity.',
        mainImage: hpeqxnew,
        details: `
<div className='modal-section'>
  <p className='modal-text'>
    During my time at Equinox, I took on a multi-faceted role where I managed the e-commerce strategy, front-end development, digital merchandising, and product management for The Shop. With a clear focus on elevating the online shopping experience, I spearheaded a complete redesign and custom development of the Shopify storefront.
  </p>
  <p className='modal-text'>
    Recognizing the need to align Equinox’s digital retail experience with its premium brand ethos, I led the creation of a bespoke Shopify theme. This initiative involved not only redesigning the user interface but also strategically aligning the online presence with Equinox’s core values of luxury, performance, and seamless integration across platforms. The result was a digital storefront that harmonized with Equinox's primary website and Equinox+ app, ensuring a consistent brand experience for all users.
  </p>
</div>    `,
        images: [
            { src: hpeqxnew, caption: 'The finished product, currently live at shop.equinox.com' },
            { src: oldhp, caption: 'The original design of The Shop homepage.' },
            { src: hpeqx, caption: 'Desktop homepage design figma for this project' },
            { src: pdpeqx, caption: 'Desktop product page design figma for this project' },
        ],
    },
    {
        logo: un,
        title: 'Intern, Economic Affairs',
        summary: 'Supported the High-Level Panel on Financial Accountability Transparency and Integrity (FACTI Panel), conducting economic policy analysis and developing the landing page for the Panel\'s final report.',
        mainImage: factilanding,
        details: `
      <p>My tenure as an Economic Affairs Intern was primarily dedicated to supporting the FACTI Panel—The High-Level Panel on International Financial Accountability, Transparency, and Integrity for Achieving the 2030 Agenda. The FACTI Panel was a beacon of global efforts in enhancing financial accountability and integrity, key pillars in realizing the ambitious 2030 Agenda for Sustainable Development.</p>
      <p>Co-chaired by the former Prime Minister of Niger, Ibrahim Assane Mayaki and the former President of Lithuania, Dalia Grybauskaitė, the panel consisted of a diverse group of experts and world leaders, each contributing their rich perspectives and insights ranging from trade to cybersecurity and cryptocurrency. The panel's mandate was broad yet clear: scrutinize prevailing challenges and trends in financial accountability, transparency, and integrity, and furnish evidence-based recommendations to bridge gaps in the international system.</p>
    `,
        images: [
            { src: factilanding, caption: 'The website for the final report' },
            { src: trade, caption: 'Trade misinvoicing data module: my contributing section in the final report' },
            { src: un1, caption: 'UN Secretary General delivering opening remarks at COP21' },
        ],
    },
    {
        logo: maxell,
        title: 'Web Designer',
        summary: 'Produced wireframes and interactive prototypes, creating a comprehensive design system that elevated brand messaging.',
        mainImage: adobe,
        details: `
<div className='modal-section'>
  <p className='modal-text'>
    At Maxell, I refined my design expertise by producing wireframes, mockups, and interactive prototypes for the Latin American market. I worked closely with the team to translate business goals into visually compelling and effective digital assets, which bolstered brand recognition and consumer engagement.
  </p>
  <p className='modal-text'>
    My work included creating a cohesive design system and developing interactive, responsive landing pages using HTML, CSS, and JavaScript. I leveraged Adobe Creative Suite to its full extent, mastering techniques in Photoshop for high-quality visual production—such as advanced compositing, 3D rendering, and image manipulation. This attention to detail and proficiency in both design and coding boosted the impact of the brand's marketing campaigns, resulting in a digital and visual experience that aligned with the brand’s identity and messaging.
  </p>
</div>    `,
        images: [
            { src: earbuds, caption: 'Marketing asset designed for product launch' },
            { src: adobe, caption: 'Marketing asset produced in Adobe Photoshop' },
        ],
    },
];

function Work({ isDarkMode }) {
    const [selectedJob, setSelectedJob] = useState(null);
    const appRef = useRef(null);

    const handleJobClick = (index) => {
        if (selectedJob !== null) {
            return; // Prevent clicking on the job again if a project is already selected
        }
        setSelectedJob(index === selectedJob ? null : index);
        if (appRef.current) {
            //scroll into view dont use smoother behavior
            appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });

        }
    };

    const handleBackClick = () => {
        //scroll to top
        appRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }


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

    return (
        <div className='work' ref={appRef}>
            <h3>MY WORK</h3>
            <div className='exp'>
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
                            <div dangerouslySetInnerHTML={{ __html: jobs[selectedJob].details }} />
                            {jobs[selectedJob].images.map((image, idx) => (
                                <div key={idx} className='modal-image-container'>
                                    <img src={image.src} alt={image.caption} className='job-images' />
                                    <p className='modal-text caption'>{image.caption}</p>
                                </div>
                            ))}
                            <button className="button" onClick={() => { setSelectedJob(null); handleBackClick(); }}>Back</button>
                        </animated.div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Work;