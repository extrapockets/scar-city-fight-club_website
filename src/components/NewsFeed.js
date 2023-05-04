import React, { useState, useEffect } from "react";

const NewsFeed = ({ name, url }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => setText(text))
      .catch((error) => console.error(error));
  }, [url]);

  return (
    <div className="news-feed">
      <h2>{name}</h2>
      <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default NewsFeed;
