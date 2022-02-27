const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/hat/*',
        createProxyMiddleware({
            target: 'http://hat-service:8080/',
            changeOrigin: true,
        })
    );
};