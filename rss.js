const Parser = require("rss-parser");
const moment = require("moment");

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

async function getSortedHtml() {
  try {
    const parser = new Parser();
    const promises = rssFeeds.map(async (feed) => {
      const feedData = await parser.parseURL(feed.url);
      const items = feedData.items.slice(0, 5); // limit to 5 items
      const itemsWithDate = items.map((item) => {
        return {
          ...item,
          date: moment(item.isoDate || item.pubDate).toDate(),
        };
      });
      return itemsWithDate;
    });
    const itemsArrays = await Promise.all(promises);
    const sortedItems = itemsArrays
      .flat()
      .sort((a, b) => moment.utc(b.date).diff(moment.utc(a.date)));
    const itemsHtml = sortedItems.map((item) => {
      return `<h3>${item.title}</h3><p>${item.contentSnippet}</p><p>${moment
        .utc(item.date)
        .format("MMMM Do YYYY, h:mm:ss a")}</p><a href="${item.link}">Read More</a>`;
    });
    const html = `<html><head><title>RSS Feed</title></head><body>${itemsHtml.join(
      ""
    )}</body></html>`;
    return html;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting sorted RSS feed HTML");
  }
}

module.exports = { getSortedHtml };