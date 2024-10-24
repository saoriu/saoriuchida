import scrape from './images/scrapesight.png';
import sukiImage from './images/title.png';
import gameplay from './images/gameplay.png';
import lighting from './images/lighting.png';
import scraper from './images/scraper.png';
import crafting from './images/crafting.png';
import development from './images/development.png';
import sweetbean from './images/sweetbean.png';
import sweetpreview from './images/sweetbeanpreview.png';

const importFrames = (prefix, count) => {
    return Array.from({ length: count }, (_, i) => require(`./images/${prefix}_frame_${i}.png`));
};

const sitFrames = importFrames('sit', 8);
const attack5Frames = importFrames('attack5', 14);

export const projects = [
        { logo: sweetbean,
            title: 'sweetbean™',
            summary: 'My first business venture, a digital platform for all things beauty — fully designed, developed, and operated by myself. Coming soon!',
            mainImage: sweetbean,
            thumbnail: sweetpreview,
            ready: false,
            details: ``,
        }
        ,
        {
            logo: sukiImage,
            title: 'Suki Ran Away™',
            summary: 'An HTML5 game I designed and developed from the ground up. Built with JavaScript, utilizing Phaser3 and a Matter.js for game development, and featuring a React-based UI.',
            mainImage: sukiImage,
            ready: true,
            thumbnail: gameplay,
            url: 'suki',
            details: `
    <div className='modal-section'>
      <p className='modal-text'>
        <strong>Suki Ran Away™</strong> is a passion project I first started in high school, refined during my college years, and have continuously improved over time. It’s a rich, multi-faceted game that blends skill progression, player-versus-monster combat, resource gathering, item crafting, and equipment upgrades, all designed to offer dynamic gameplay.
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
            ready: true,
            thumbnail: scraper,
            url: 'scrapesight',
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