import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import Samples from './Samples';

import farfetch from './images/farfetch.png';
import eqx from './images/eqx.svg';
import un from './images/un.svg';
import maxell from './images/maxell.png';
import hpeqxnew from './images/hp-eqx-new.png';
import kickscrew from './images/kickscrew.png';
import oldhp from './images/oldhp.png';
import hpeqx from './images/hp-eqx.png';
import pdpeqx from './images/PDP-eqx.png';
import factilanding from './images/facti-landing.png';
import un1 from './images/un.png';
import trade from './images/trade.png';
import kcsearch from './images/kcsearch.png';
import edd from './images/edd.png';
import coupons from './images/coupons.png';
import blog from './images/blog.png';
import filters from './images/filters.png';
import navigation from './images/navigation.png';
import headless from './images/headless.png';
import earbuds from './images/earbuds.jpg';
import adobe from './images/adobe.png';
import sizing from './images/sizing.png';
import search from './images/search.png';
import releases from './images/releases.png';
import cvr from './images/cvr.png';

const jobs = [
    {
        logo: kickscrew,
        title: 'Sr. Technical Product Manager (current)',
        summary: 'As the leader of the product organization, I led a transformation to the product operating model and championed a data-driven culture across the company. By employing a product strategy that centered discovery and risk analysis, we identified, prioritized, and tested more than 50 initatives in the span of a year, including a major and highly technical migration to a headless storefront — delivering significant performance and conversion improvements.',
        mainImage: headless,
        workSample: kickscrew,
        details: `
    <div className='modal-section'>
        <p className='modal-text'>
            When the opportunity to head a product organization in a start-up environment presented itself, I made the difficult decision to leave FARFETCH and take on the challenge.
            </p>
        <p className='modal-text'>
            As the <strong>Sr. Technical Product Manager</strong> at <strong>Kicks Crew</strong>, I led multiple high-impact initiatives that transformed the user experience across the web and mobile platforms. I managed the full product lifecycle from discovery to delivery, and by leading the business to embrace AB testing tools, we ensured that all solutions were aligned with user needs and business goals.
        </p>
        <p className='modal-text'>
            One of the most significant projects I oversaw was the migration to a <strong>headless storefront</strong> using React and Next.js. This migration improved site performance and increased development scalability by offering greater flexibility in deploying new features, which directly contributed to improved SEO and conversion rates. 
        </p>
        <p className='modal-text'>
            These initiatives, driven by a structured product discovery process, delivered measurable improvements to Kicks Crew’s user experience, conversion rates, and overall business performance. My ability to lead cross-functional teams, prioritize high-impact initatives, and apply data-driven insights were key to the success of my team.
        </p>
    </div>`,
        images: [
            { src: kcsearch, caption: 'The search feature was a critical user touchpoint that required significant improvements. Through rigorous user segment analysis, we identified high drop-off rates after an interaction with the search component, leading to a strategic project to introduce Recently Searched and Trending Searches.' },
            { src: edd, caption: 'I led the development of the Estimated Delivery Date (EDD) feature, addressing one of the most common user complaints—uncertainty around shipping times. This project required detailed collaboration across engineering, operations, and data teams. By integrating location-based data and fulfillment center information, we provided users with accurate delivery windows. This feature alone resulted in a 10% increase in purchase likelihood for products with expedited shipping options.' },
            { src: coupons, caption: 'Coupon wallet implementation that increased user retention and coupon redemption rate.' },
            { src: blog, caption: 'Blog feature redesigned as part of the UX enhancements during the headless storefront migration.' },
            { src: filters, caption: 'By redesigning the filter UI and making it persistent on scroll, we enhanced the user’s ability to find products quickly, particularly on mobile. These changes streamlined navigation and contributed to higher session durations and improved product page views.' },
            { src: navigation, caption: 'The Inspire Navigation initiative aimed to increase navigation utilization and item views by incorporating product imagery and functional categorization into the menu. The previous text-only interface led to high bounce rates and low engagement, particularly from low and medium intent users, who struggled to navigate the catalog. Following the implementation, we observed a 5.5% increase in menu interactions, a 2% boost in collection views, and an 8% lift in purchase count, with users engaging more effectively with the menu and search, leading to a 23% increase in purchase count for those who viewed search.' },
        ],
    },
    {
        logo: farfetch,
        title: 'Product Manager, DTC',
        summary: 'Managed and outlined a product roadmap for the DTC app and website, delivering measurable improvements to the user experience by strategically focusing on personalization and platform performance.',
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
    const [password, setPassword] = useState('');
    const [showSamples, setShowSamples] = useState(false);
    const appRef = useRef(null);
    const navigate = useNavigate();

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
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === 'discover') {
            setShowSamples(true);
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

    return (
        <div className='work' ref={appRef}>
            <h3>MY WORK</h3>
            {!showSamples && (
                <animated.div className='exp' style={fadeInOutExp}>
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
                                ) : (
                                    null
                                )}
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
                </animated.div>
            )}
            {showSamples && (
                <animated.div style={fadeInOutSamples}>
                    <Samples />
                </animated.div>
            )}
        </div>
    );
}

export default Work;