const cors = require("cors");
const express = require("express");
const { getSortedHtml } = require("./rss"); // Import the rss.js module

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Set the Content Security Policy
// img-src 'self' https://scar-city-feed.onrender.com/favicon.ico;
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self'; font-src 'self'; style-src 'self'; script-src 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; base-uri 'self'; frame-src 'none'; manifest-src 'self'; connect-src 'self'; media-src 'self'; child-src 'self'; worker-src 'self'; script-src-elem 'self' 'unsafe-inline';"
  );
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