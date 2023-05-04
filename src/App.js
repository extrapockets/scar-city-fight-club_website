import React from "react";
import NewsFeed from "./components/NewsFeed";



const newsFeeds = [
  {
    name: "Bitcoin News",
    url: "http://localhost:3001/rss",
  },
  // {
  //   name: "Muay Thai News",
  //   url: "http://localhost:8080/https://hnrss.org/newest?q=FOSS+OR+privacy"
  // }
];

const App = () => {
  return (
    <div className="app">
      <h1>News Feed via No BS Bitcoin</h1>
      <div className="app-wrapper">
        {newsFeeds.map((feed) => (
          <NewsFeed name={feed.name} url={feed.url} key={feed.name} />
        ))}
      </div>
    </div>
  );
};

export default App;





// import React from "react";
// import NewsFeed from "./components/NewsFeed";

// const newsFeeds = [
//   {
//     name: "Bitcoin News",
//     url: "https://cors-anywhere.herokuapp.com/https://nobsbitcoin.com/rss/"
//   },
//   {
//     name: "Muay Thai News",
//     url: "https://cors-anywhere.herokuapp.com/https://hnrss.org/newest?q=FOSS+OR+privacy"
//   }
//   ];

// const App = () => {
//   return (
//     <div className="app">
//       <h1>News Feed</h1>
//       <div className="app-wrapper">
//         {newsFeeds.map((feed) => (
//           <NewsFeed name={feed.name} url={feed.url} key={feed.name} />
        
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

