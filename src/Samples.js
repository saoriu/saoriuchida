import React, { useState, useMemo } from 'react';
import discovery from './samples/discovery.pdf';
import headless from './samples/headless.pdf';
import prd from './samples/prd.pdf';
import edd from './samples/edd.pdf';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

const Samples = ({ isDarkMode }) => {
    const [selectedPdf, setSelectedPdf] = useState('discovery');
    const theme = isDarkMode ? 'dark' : 'light';

    const pdfs = useMemo(() => ({
        discovery: {
            title: 'Discovery Framework',
            description: 'This document outlines a structured approach to product discovery, as defined by product leaders Teresa Torres and Marty Cagan. It introduces the methods of opportunity mapping, assumption testing, stakeholder alignment, and a prioritization framework that I implemented in my team.',
            fileUrl: discovery
        },
        headless: {
            title: 'Next.js Migration',
            description: 'The headless migration document details the transition from a Shopify theme to a headless architecture using Next.js and React. It showcases the technical strategy, improvements in site performance, and how server-side rendering enhanced SEO and scalability for the platform.',
            fileUrl: headless
        },
        edd: {
            title: 'Estimated Delivery',
            description: 'This document covers the Estimated Delivery Date (EDD) feature, including the technical implementation of location-based shipping estimates. It demonstrates how this feature increased user trust, improved conversion rates, and contributed to an overall enhanced shopping experience.',
            fileUrl: edd
        },
        prd: {
            title: 'Product Requirements',
            description: 'The PRD outlines the requirements and specifications for key features and products. It showcases how technical, design, and business considerations are integrated to create actionable roadmaps that guide successful product development and execution.',
            fileUrl: prd
        }
    }), []);

    const selectedPdfDetails = pdfs[selectedPdf];

    return (
        <div className='samples'>
            <h2>Samples</h2>
            <div className='buttons'>
                {Object.keys(pdfs).map(key => (
                    <button
                        className={`button sample ${selectedPdf === key ? 'disabled' : ''}`}
                        key={key}
                        onClick={() => setSelectedPdf(key)}
                        disabled={selectedPdf === key}
                    >
                        {pdfs[key].title}
                    </button>
                ))}
            </div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <div className='pdf-container'>
                    <h3>{selectedPdfDetails.title}</h3>
                    <p>{selectedPdfDetails.description}</p>
                    <div className='pdf-view'>
                        <Viewer fileUrl={selectedPdfDetails.fileUrl} theme={theme} />
                    </div>
                </div>
            </Worker>
        </div>
    );
};

export default Samples;