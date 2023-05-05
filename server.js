const cors = require("cors");
const express = require("express");
const Parser = require("rss-parser");

const app = express();
const port = 3001;

app.use(cors());

const rssFeeds = [
  {
    name: "Bitcoin News",
    url: "https://nobsbitcoin.com/rss/",
  },
  {
    name: "Intel Techniques Blog",
    url: "https://inteltechniques.com/blog/feed/",
  },
  {
    name: "Buzzsprout Podcast",
    url: "https://feeds.buzzsprout.com/1790481.rss",
  },
];

app.get("/rss", async (req, res) => {
  try {
    const parser = new Parser();
    const promises = rssFeeds.map(async (feed) => {
      const feedData = await parser.parseURL(feed.url);
      const itemsHtml = feedData.items.map((item) => {
        return `<h3>${item.title}</h3><p>${item.contentSnippet}</p><a href="${item.link}">Read More</a>`;
      });
      const html = `<html><head><title>${feed.name}</title></head><body>${itemsHtml.join("")}</body></html>`;
      return html;
    });
    const html = (await Promise.all(promises)).join("");
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});