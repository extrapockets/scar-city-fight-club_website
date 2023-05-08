const cors = require("cors");
const express = require("express");
const { getSortedHtml } = require("./rss"); // Import the rss.js module

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Set the Content Security Policy
// Render deployment:'self' is https://scar-city-feed.onrender.com;
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' https://scar-city-branch-csp-change1.onrender.com/rss https://nobsbitcoin.com/rss/ https://inteltechniques.com/blog/feed/ https://feeds.buzzsprout.com/1790481.rss");
  next();
});

app.get("/rss", async (req, res) => {
  try {
    const html = await getSortedHtml(); // Use the getSortedHtml() function
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});