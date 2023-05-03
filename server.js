const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/rss", async (req, res) => {
  try {
    const response = await fetch("https://nobsbitcoin.com/rss/");
    const xml = await response.text();
    res.set("Content-Type", "application/xml");
    res.send(xml);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching RSS feed");
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
