/**
 * 配置跨域 proxy
 */
module.exports = {
    Proxy: {
        "/api": {
            target: "https://client.10010.com/servicetransactbusiness/transactSpare",
            changeOrigin: true,
            reWrite:(url) => url.replace('/^\/api/','')
        },
    }
}