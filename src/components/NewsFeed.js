import { useState, useEffect } from "react";

function NewsFeed() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    async function fetchRssFeeds() {
      // Array of RSS feeds to fetch
      const rssFeeds = [
    //    "https://example.com/rss-feed-1.xml",
    //    "https://example.com/rss-feed-2.xml",
    //    "https://example.com/rss-feed-3.xml",
        "https://nobsbitcoin.com/rss/"
      ];

      // Fetch all the RSS feeds using Promises.all
      const responses = await Promise.all(rssFeeds.map(feed => fetch(feed)));

      // Parse the XML from each feed using the DOMParser API
      const xmlDocs = await Promise.all(responses.map(response => response.text().then(text => new DOMParser().parseFromString(text, "text/xml"))));

      // Extract the news items from each feed and combine them into a single array
      const items = xmlDocs.flatMap(xmlDoc => Array.from(xmlDoc.querySelectorAll("item")).map(item => {
        return {
          title: item.querySelector("title").textContent,
          link: item.querySelector("link").textContent,
          description: item.querySelector("description").textContent,
          pubDate: item.querySelector("pubDate").textContent
        };
      }));

      // Sort the news items by publication date
      items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

      // Set the news items state
      setNewsItems(items);
    }

    fetchRssFeeds();
  }, []);

  return (
    <div>
      {newsItems.map(item => (
        <div key={item.link}>
          <h3><a href={item.link}>{item.title}</a></h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
