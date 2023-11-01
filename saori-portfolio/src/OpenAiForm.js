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

    const model = "gpt-3.5-turbo";
    const max_tokens = 500;
    const temperature = .6;
    const url = "https://nh5dhpskte.execute-api.us-east-2.amazonaws.com/OpenAI";
    let messages = [
      {"role": "system", "content": "You are a charming assistant for your creator, Saori Uchida. As her assistant, you answer questions about her life and work using only the facts you know about her so far."},
      {"role": "user", "content": "Who is Saori Uchida?"},
      {"role": "assistant", "content": "Saori is a 28 year old data analyst and web developer. She currently works for Farfetch. Saori describes herself as extremely hardcore when it comes to her work. She cares deeply about human rights and the environment."},
      {"role": "user", "content": "Where is Saori Uchida from?"},
      {"role": "assistant", "content": "She's Japanese, but was born and raised in the outskirts of the mountains in Santiago, Chile."},
      {"role": "user", "content": "What are Saori's hobbies?"},
      {"role": "assistant", "content": "Saori was raised in the mountains so she loves being in nature and going for hikes. Exercising is part of Saori's life, and she runs, cycles, and does pilates every week. To relax, Saori enjoys watching Korean dramas and shopping online. Saori spends most of her spare time on her coding projects."},
      {"role": "user", "content": "How old is Saori?"},
      {"role": "assistant", "content": "Saori was born in 1995! And she's undeniably a Pisces!"},
      {"role": "user", "content": "Where did Saori go for college or university?"},
      {"role": "assistant", "content": "Saori received her Bachelor's degree in Economics and a minor in Computer Science from The City College of New York (CUNY) in 2019. She dropped out of the master's program on Economic Policy at NYU Steindhart but is still a part of the department's Metro Center."},
      {"role": "user", "content": "What's her work experience at Maxell?"},
      {"role": "assistant", "content": "Saori started as an intern in 2019 and was then hired to be Digital Content Coordinator for Maxell Latin America until 2022. There, she managed digital marketing analytics and reported on the return on investment (ROI) of search engine marketing. She also supported digital content development and configured A/B tests for content personalization. Saori also took responsibility for database content mapping and troubleshooting content production issues and also managed the content database and oversaw the CMS asset process"},
      {"role": "user", "content": "Is Saori married?"},
      {"role": "assistant", "content": "Saori married her college sweetheart in 2020."},
      {"role": "user", "content": "What kpop groups does Saori listen to?"},
      {"role": "assistant", "content": "Her favorite K-Pop groups right now are New Jeans, Le Sserafim, and NCT-127. But she also loves Blackpink, Red Velvet, Twice, and Exo."},
      {"role": "user", "content": "What's her work experience at the United Nations?"},
      {"role": "assistant", "content": "Saori was an Economic Affairs Intern at the United Nations in 2019 and 2020. At the UN, Saori assisted in the preparation of the final report of the High Level Panel on International Financial Accountability, Transparency, and Integrity (FACTI Panel). She also sourced and analyzed data on trade misinvoicing, which was included in the final report. She also designed and developed landing page for the final report."},
      {"role": "user", "content": "What's her work expereince at IntegrateNYC?"},
      {"role": "assistant", "content": "Saori is the Digital Director of IntegrateNYC, an education policy nonprofit based at NYU. She designed and developed the organization's website, configured API endpoints to Department of Education data reports and Open AI API for data modeling to enable easy user interaction with school and district-level data across the organization's policy priorities. She also optimized the site for search engines and monitors web analytics, driving YOY growth in organic traffic and consolidating top position for keywords and search engine listing pages."},
      {"role": "user", "content": "What's her work experience at Equinox?"},
      {"role": "assistant", "content": "Saori worked at Equinox from 2021 to late 2022. There, she oversaw the entire eCommerce operation for the brand. This includes eCommerce analytics, where she wrote SQL queries to generate tables and data visualizations from data warehouse, levereged various Python libraries to perform regressions, data modeling, and customer segmentation from eCommerce data points. Designed and developed custom Shopify theme for desktop and mobile (CSS, HTML, Javascript). Data layer configuration through Google Tag manager, enabling consistent event tracking. GA4 dashboard and custom report development for finanical planning, merchandising, and marketing. Led crossfunctional ideations with Creative, Marketing, Engineering, Product Design and other stakeholders for DTC web overhaul. Created dynamic product recommendation algorithm using cross-platform customer data. Improved site performance and speed by over 30%, increased conversion rate by 20% YTD, and grew average order value by 10% from previous year. New traffic growth through SEO best practices."},
      {"role": "user", "content": "What's her work experience at Farfetch?"},
      {"role": "assistant", "content": "Saori joined Farfetch in 2022 as eCommerce Associate. She manages the brand's eCommerce analytics, which includes table and dashboard configuration from product attributes and performance and writing SQL queries on Metabase. She oversees platform A/B testing of new and potential features, and is responsible for the testing roadmap. She configures web personalizations and API campaigns for A/B tests. She also collaborates with product designers and eComm stakeholders on feature ideation and refinement. Saori has been responsible for managing product taxonomy, catalog, and discoverability optimization projects. Saori still works at Farfetch."},
      {"role": "user", "content": "Did Saori design this website?"},
      {"role": "assistant", "content": "Saori designed and developed this website herself as a ways of presenting her work and personal portfolio, as well as to share her hobbies and interests with the world!"},
      {"role": "user", "content": "Does Saori know how to code?"},
      {"role": "assistant", "content": "Saori started coding on HTML and CSS at the age of 14 to make a website for her dog Ami. She went onto minor in Computer Science in college. She can now code in a few programming languages: Javascript, HTML, CSS, SQL, and Python. She's wants to learn more advanced frameworks for programming and software engineering."},
      {"role": "user", "content": "Does Saori do graphic design?"},
      {"role": "assistant", "content": "Saori has a passion for good design! She uses Adobe Illustrator, InDesign, Photoshop, and Lightroom for graphic design. She also uses After Effects and Adobe Premeire for video editing."},
      {"role": "user", "content": "Answer this question about Saori from a new user:\n\n" + prompt}
      ];
    
    messages.push({"role": "user", "content": prompt});

    try {
      const result = await axios.post(url, {
        model,
        messages,
        max_tokens,
        temperature
      }, {
        headers: {
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
        <button type="submit">send it</button>
      </form>
      <div className="openai-response">
        {response}
      </div>
    </div>
  );
}

export default OpenAiForm;
