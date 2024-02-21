// api/fetchRss.js
const Parser = require('rss-parser');

const parser = new Parser({
    customFields: {
      item: [
        ['media:thumbnail', 'media$thumbnail', { keepArray: false }],
        ['media:content', 'media$content', { keepArray: true }],
        ['media:description', 'media$description', { keepArray: false }],
      ],
    },
  });
  

module.exports = async (req, res) => {
  try {
    const feed = await parser.parseURL('https://feeds.feedburner.com/wnyc_bl');
    res.status(200).json(feed);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
