const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware("/api", {
        target: "https://hub.fy1m.net/",
        // target: "http://localhost:3000/",
        // secure: false,
        changeOrigin: true,
        // Rewrite part of the interface to ensure correct url splicing
        pathRewrite: {   
            "^/api": "/",
        },
    }))
}
