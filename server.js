const cors = require("cors");
const express = require("express");
const { getSortedHtml } = require("./rss"); // Import the rss.js module

const app = express();
const PORT = process.env.PORT || 3001;

// To allow cross-origin requests from any domain:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// const allowedOrigins = [
  // 'http://localhost:3000',
  // 'https://scar-city-branch-csp-change1.onrender.com',
  // 'https://scar-city-branch-csp-change1.onrender.com/rss',
  // 'https://nobsbitcoin.com',
  // 'https://inteltechniques.com',
  // 'https://feeds.buzzsprout.com',
  // 'https://scar-city-fight-club-website-lxqidsuik-extrapockets.vercel.app/',
  // 'https://scar-city-fight-club-website-ennuvopsd-extrapockets.vercel.app/'
// ];

// Set up the CORS options
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// Use the CORS middleware with the options
// app.use(cors(corsOptions));

app.get('/rss', async (req, res) => {
  try {
    const html = await getSortedHtml();
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});