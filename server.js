const cors = require("cors");
const express = require("express");
const { getSortedHtml } = require("./rss"); // Import the rss.js module

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

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