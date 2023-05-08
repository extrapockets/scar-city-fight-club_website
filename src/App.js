import React from "react";
import NewsFeed from "./components/NewsFeed";



const newsFeeds = [
  {
    name: "News:",
    // change to URL for Render web service deployment
    url: "https://scar-city-feed.onrender.com",
    // url: "http://localhost:3001/rss",
  },
];

const App = () => {
  return (
    <div className="app">
      <h1>ScarCityFight.Club</h1>
      <div className="app-wrapper">
        {newsFeeds.map((feed) => (
          <NewsFeed name={feed.name} url={feed.url} key={feed.name} />
        ))}
      </div>
    </div>
  );
};

export default App;