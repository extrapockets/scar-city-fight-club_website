
import React from "react";
import NewsFeed from "./components/NewsFeed";


const App = () => {
    return (
      <div className="app">
        <h1>Bitcoin Dashboard</h1>
        <div className="app-wrapper">
          <NewsFeed />
        </div>
      </div>
    );
  };

export default App;
