const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    // This agent is valid locally
    app.use(createProxyMiddleware("/", {
        target: "http://localhost:3000/",
        changeOrigin: true,
    }))
}
