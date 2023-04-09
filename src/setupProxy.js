const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/categories',
    createProxyMiddleware({
      target: 'https://web-dev.dev.kimo.ai',
      changeOrigin: true,
    })
  );
};
   