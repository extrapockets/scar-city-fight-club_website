const cors = require("cors");
const express = require("express");
const Parser = require("rss-parser");

const app = express();
const port = 3001;

app.use(cors());

app.get("/rss", async (req, res) => {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL("https://nobsbitcoin.com/rss/");
    const itemsHtml = feed.items.map((item) => {
      return `<h3>${item.title}</h3><p>${item.contentSnippet}</p><a href="${item.link}">Read More</a>`;
    });
    const html = `<html><head><title>Bitcoin News</title></head><body>${itemsHtml.join("")}</body></html>`;
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});