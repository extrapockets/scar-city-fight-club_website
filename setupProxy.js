const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/rss',
    createProxyMiddleware({
      target: 'https://scar-city-branch-csp-change1.onrender.com/',
      changeOrigin: true,
    })
  );
};