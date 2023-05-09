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
// https://jafreitas90.medium.com/how-to-solve-the-cors-issue-in-a-create-react-app-project-with-a-proxy-5403141d7f32